import React, {useState} from 'react';
import axios from 'axios'
// import styles from './PostForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert, hideAllForms } from '../redux/actions/actions';
import { Alert } from '../UI/Alert';




function CreateForm({task}) {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',
    })

    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)
    const token = useSelector(state => state.auth.token)
    console.log('token ',token)

    
    const url = `https://reqres.in/api/users`



      
    function submit(e) {
        e.preventDefault();
        if (!data.first_name.trim() || !data.email.trim() || !data.last_name.trim() || !data.avatar.trim()) {
            return dispatch(showAlert('Заполните все необходимые поля'))
        }

        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                dispatch(hideAllForms(true))
                return dispatch(showAlert('Профиль успешно создан!'))
            })
            .catch(function (error) {
                console.log(error);
                return dispatch(showAlert('При создании пользователя произошла ошибка!'))
            })
            setData({
                first_name: '',
                last_name: '',
                email: '',
                avatar: '',
            })

                setTimeout(() => {
                dispatch(hideAllForms(false))
            }, 3000) 
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log('newdata',newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
            {alert && <Alert text={alert} />}

                <div className='form-group'>
                <label htmlFor="title"><h4>Создание нового профиля</h4></label>

                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="first_name"
                    defaultValue={data.first_name}
                    placeholder='first_name'
                    type="text">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="last_name"
                    defaultValue={data.last_name}
                    placeholder='last_name'
                    type="text">
                </input><br />
                    <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="email"
                    defaultValue={data.email}
                    placeholder='email'
                    type="email">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="avatar"
                    defaultValue={data.avatar}
                    placeholder='avatar'
                    type="text">
                </input><br />
                </div>
                <button className="btn btn-success" type="Submit">Создать профиль</button>
            </form>
        </div>
    );
}

export default CreateForm;