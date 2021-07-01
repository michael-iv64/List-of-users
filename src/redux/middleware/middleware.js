import { CREATE_POST } from "../constants/constants"
import {showAlert} from '../actions/actions'

const forbidden = ['fuck', 'suck', 'terract', 'spam']

export function forrbidenMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Это запершенный контент!'))
                }
            }
            return next(action)
        }
    }
}