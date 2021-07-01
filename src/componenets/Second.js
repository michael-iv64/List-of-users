import React,{useEffect, useState} from 'react'
import axios from 'axios'
function App() {
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(1)

  useEffect(() => {
    if (fetching) {
      const url = `https://jsonplaceholder.typicode.com/photos?_limit=10&page=${currentPage}`
      axios.get(url)
        .then(response => {
          setPhotos([...photos, ...response.data])
          setCurrentPage(prevState => prevState + 1)
          setTotalCount(response.headers['x-total-count'])
        }
          
      )
      .finally(() => setFetching(false))
      
    }

  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 &&
    photos.length < totalCount)
    {
      setFetching(true)

      }
  }
  return (
    <div >
      <h4>Пример работы с большим количеством изображений</h4>
      {photos.map(photo =>
        <div className='photo' key={photo.id + Math.random(1, 100000) } >
          <div className='title'>{photo.id}. {photo.title}</div>
          <img src={photo.thumbnailUrl} alt='' />
        </div>
        )}
    </div>
  );
}

export default App;
