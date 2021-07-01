
import Tasks from './Tasks';
import ScrollPageBlock from '../UI/ScrollPageBlock';
import './Task.css'
import { useDispatch } from 'react-redux';
import { getTokenAction } from '../redux/actions/auth';


function Admin() {
  // console.log('token',localStorage.getItem('token'))
  const dispatch = useDispatch()

  const logoutHandler = () => {
    window.location.reload();
    // dispatch(getTokenAction(''))
  }
  return (
    <div className="container pt-3">
      <button className="btn btn-primary logoutButton" onClick={logoutHandler}>Logout</button>
      <div className="row">
        <div className="col">
          <Tasks />
          <ScrollPageBlock />
        </div>
      </div>
    </div>
  );
}

export default Admin;
