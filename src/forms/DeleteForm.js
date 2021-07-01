import React, {useState} from 'react';
import axios from 'axios'
// import styles from './PostForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert, hideAllForms } from '../redux/actions/actions';
import { Alert } from '../UI/Alert';




function DeleteForm({task}) {
    // const url = ''
    const data = {
        id: task.id,
        first_name: task.first_name,
        last_name: task.last_name,
        email: task.email,
        avatar: task.avatar,
    }

    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)
    const token = useSelector(state => state.auth.token)
    console.log('token ',token)

    
    const url = `https://reqres.in/api/users/${task.id}`
    // const url = '/'



      
    function submit(e) {
        e.preventDefault();
        axios.delete(url, data)
            .then(res => {
                console.log(res.data)
                dispatch(hideAllForms(true))
                return dispatch(showAlert('Профиль удаден!'))
            })
            .catch(function (error) {
                console.log(error);
                return dispatch(showAlert('При удалении пользователя произошла ошибка!'))
            })
            setTimeout(() => {
                dispatch(hideAllForms(false))
            }, 3000)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
            {alert && <Alert text={alert} />}

                <div className='form-group'>
                <label htmlFor="title"><h4>Удаление профиля</h4></label>
                <h3 style={{color: 'rgb(150, 40, 40)'}}>Вы в самом деле хотите удалить этот профиль?</h3>
         
                </div>
                <button className="btn btn-success red" type="Submit">Удалить профиль</button>
            </form>
        </div>
    );
}

export default DeleteForm;