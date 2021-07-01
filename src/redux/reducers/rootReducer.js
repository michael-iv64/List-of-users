import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { postsReducer } from './postsReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    auth: authReducer,
})