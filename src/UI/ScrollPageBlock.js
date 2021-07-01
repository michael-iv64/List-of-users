import React, {useState, useEffect} from 'react';
import { changeUrlAction, scrollPostsPagination, stopScrolling, setScrollPosition } from '../redux/actions/actions';

import { useDispatch, useSelector } from 'react-redux';

function ScrollPageBlock() {
    const users = useSelector(state => state.posts.data)
    const totalCount = useSelector(state => state.posts.fetchedPosts.total || 1)
    
    
    const [fetching, setFetching] = useState(false)
    const page = useSelector(state => state.app.page)
    const scrollHeight = useSelector(state => state.app.scrollPosition)
    const scrolling = useSelector(state => state.app.scrolling)

    const dispatch = useDispatch()
    

        
        useEffect(() => {
            let url = `https://reqres.in/api/users?page=${page}`
            if (fetching) {
                    return dispatch(scrollPostsPagination(url))
            }
            document.addEventListener('scroll', scrollHandler)
            return function () {
                document.removeEventListener('scroll', scrollHandler)
            }
        }, [fetching])
        
        
        const scrollHandler = (e) => {
            if (totalCount === users.length) {
                dispatch(stopScrolling())
            }
            if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && scrolling )
            {

                    dispatch(setScrollPosition(e.target.documentElement.scrollTop))
                    // dispatch(stopScrolling())
                    dispatch(changeUrlAction({ page: page + 1 }))
                    setFetching(true)
            }
        }
        setTimeout(() => {
            window.scrollTo(0, scrollHeight);
        }, 0)
        
        return (
            <></>
        );
}

export default ScrollPageBlock;