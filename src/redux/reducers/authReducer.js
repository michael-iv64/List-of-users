import { GET_TOKEN } from '../constants/constants';
const initialState = { token: '' }
export const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_TOKEN:
            return {
                token: actions.payload
            }
        
        default: return state
    }
}