import {CREATE_POST, FETCH_POST, FETCH_POST_PAGINATION, SCROLL_POST_PAGINATION} from '../constants/constants';

const init = {
    posts: [],
    fetchedPosts: [
        {total:0}
    ],
    data: []
}
export const postsReducer = (state = init, action) => {
    switch (action.type) {
        case CREATE_POST:
            // return {...state, posts: state.posts.concat(action.payload)}
            return { ...state, posts: [...state.posts, action.payload] }
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload}
        case FETCH_POST_PAGINATION:
            return {...state, fetchedPosts: action.payload}
        case SCROLL_POST_PAGINATION:
            // return {...state,fetchedPosts: [...state.fetchedPosts, ...action.payload]}
            // return { ...state, fetchedPosts: action.payload }
            return {...state,fetchedPosts: action.payload, data: [...state.data, ...action.payload.data]}
        
        default:
            return state
    }
}