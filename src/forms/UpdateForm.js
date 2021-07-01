import React, {useState} from 'react';
import axios from 'axios'
// import styles from './PostForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert, hideAllForms } from '../redux/actions/actions';
import { Alert } from '../UI/Alert';




function UpdateForm({task}) {
    // const url = ''
    const [data, setData] = useState({
        id: task.id,
        first_name: task.first_name,
        last_name: task.last_name,
        email: task.email,
        avatar: task.avatar,
        // token: "RFNkSGlDZHVycVNrM3pxMjdyVEo4VzRtVWZCZkcrbzZ5anFLTFVNZ0JOQmROczZkWUUrQ04rM0c3QVVDZUdqM01uUjIvRXN5dlRJaEEyVGRYR09Tdmc9PQ=="
    })

    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)
    const token = useSelector(state => state.auth.token)
    console.log('token ',token)

    
    const url = `https://reqres.in/api/users/${task.id}`
    // const url = '/'



      
    function submit(e) {
        e.preventDefault();
        if (!data.first_name.trim() || !data.email.trim() || !data.last_name.trim() || !data.avatar.trim()) {
            return dispatch(showAlert('Заполните все необходимые поля'))
        }

        axios.put(url, data)
            .then(res => {
                console.log(res.data)
                dispatch(hideAllForms(true))
                return dispatch(showAlert('Профиль успешно изменен!'))
            })
            .catch(function (error) {
                console.log(error);
                return dispatch(showAlert('При обновлении пользователя произошла ошибка!'))
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
                <label htmlFor="title"><h4>Редактирование</h4></label>

                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="first_name"
                    defaultValue={task.first_name}
                    placeholder='first_name'
                    type="text">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="last_name"
                    defaultValue={task.last_name}
                    placeholder='last_name'
                    type="text">
                </input><br />
                    <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="email"
                    defaultValue={task.email}
                    placeholder='email'
                    type="email">
                </input><br />
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="avatar"
                    defaultValue={task.avatar}
                    placeholder='avatar'
                    type="text">
                </input><br />
                </div>
                <button className="btn btn-success" type="Submit">Отредактировать профиль</button>
            </form>
        </div>
    );
}

export default UpdateForm;