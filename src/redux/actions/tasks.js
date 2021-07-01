import {TASKS_FETCH_DATA_SUCCESS} from '../constants/constants';
export function tasksFetchDataSuccess(tasks) {
    return {
        type: TASKS_FETCH_DATA_SUCCESS,
        tasks
    }
}

export function tasksFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(tasks => dispatch(tasksFetchDataSuccess(tasks)))
            .catch(()=>{})
    }
}