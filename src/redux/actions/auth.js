import axios from 'axios';
import { GET_TOKEN, LOGIN } from '../constants/constants';
import { showLoader, hideLoader, showAlert } from './actions';
export function getTokenAction(token) {
    return {
        type: GET_TOKEN,
        payload: token
    }
}
// export function loginAction(token) {
//     return {
//         type: LOGIN,
//         payload: token
//     }
// }

export function loginAction() {
    return async dispatch => {
        try {

            dispatch(showLoader())
            const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=1`)
            const json = await response.json()
                dispatch({ type: LOGIN, payload: json })
                dispatch(hideLoader())
        } catch (e) {
            dispatch(showAlert(' Что-то пошло не так '))
            dispatch(hideLoader())

        }
    }
}

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
