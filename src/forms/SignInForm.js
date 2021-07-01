import React, {useState} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getTokenAction } from '../redux/actions/auth';

import { showAlert } from '../redux/actions/actions';
import { Alert } from '../UI/Alert';


function SignInForm() {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const alert = useSelector(state => state.app.alert)

    
    const url = `https://reqres.in/api/login`
    function submit(e) {
        e.preventDefault();
        if (!data.password.trim() || !data.email.trim()) {
            return dispatch(showAlert('Заполните все необходимые поля'))
        }
        axios.post(url, data)
            .then(res => {

                // console.log(res.data)
                console.log('token', res.data.token)
                if (res.data.token) {
                    setTimeout(() => {
                        dispatch(getTokenAction(res.data.token))
                    },1000)
                    return dispatch(showAlert('Вы успешно вошли в систему!'))
                }
                return dispatch(showAlert('Что-то пошло не так!'))
            })
            .catch(function (error) {
                console.log(error);
                return dispatch(showAlert('Неправильное имя пользователя или пароль!'))
            });
            // --- если необходимо то очистка формы ввода --
            // setData({
            //     email: '',
            //     password: ''
            // })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return (
        <div className="w-50 container pt-3">
            <form onSubmit={(e) => submit(e)}>
            {alert && <Alert text={alert} />}

                <div className='form-group'>
                <label htmlFor="title"><h4>Войти в систему</h4></label>
                <h6> логин: eve.holt@reqres.in</h6>
                <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="email"
                    title="eve.holt@reqres.in"
                    placeholder='email'
                        value={data.email}
                        type="email">
                    </input>
                    <h6>пароль: cityslicka</h6>
                    <input
                    onChange={(e) => handle(e)}
                    className="form-control"
                    id="password"
                    placeholder='password '
                        title="cityslicka"
                        value={data.password}
                    type="password">
                </input><br />
      
                </div>
                <button className="w-100 btn btn-primary" type="Submit">Войти</button>
            </form>
        </div>
    );
}

export default SignInForm;