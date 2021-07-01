import {takeEvery, put, call} from 'redux-saga/effects'
import { hideLoader, showLoader, showAlert } from '../actions/actions'
import { FETCH_POST, REQUEST_POST } from '../constants/constants'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POST, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({ type: FETCH_POST, payload })
        yield put(hideLoader())
    } catch (e) {
       yield put(showAlert(' Что-то пошло не так '))
       yield put(hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Michael&sort_field=status&sort_direction=asc&page=1`)
    return await response.json()
}