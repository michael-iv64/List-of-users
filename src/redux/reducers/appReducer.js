import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, CHANGE_URL, ALLOW_SCROLLING, STOP_SCROLLING, SET_SCROLL_POSITION, HIDE_ALL_FORMS } from '../constants/constants';
const initialState = {
    loading: false,
    alert: null,
    page: 1,
    hideAllForms: false,
    scrolling: true,
    scrollPosition: 0

}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return { ...state, alert: null }
        case CHANGE_URL:
            return { ...state, ...action.payload }
        case ALLOW_SCROLLING:
            return {...state, scrolling: true}
        case STOP_SCROLLING:
            return { ...state, scrolling: false }
        case SET_SCROLL_POSITION:
            return { ...state, scrollPosition: action.payload }
        case HIDE_ALL_FORMS:
            return { ...state, hideAllForms: action.payload}
        default: return state
    }

}