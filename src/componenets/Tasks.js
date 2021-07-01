import React, {Component} from 'react';
import { connect } from 'react-redux';

import { scrollPostsPagination } from '../redux/actions/actions';
import { Loader } from '../UI/Loader';

import Task from './Task';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPage: 1,
      currentPage: 1
    }
  }
  
  componentDidMount() {
    this.props.newChangedPost(`https://reqres.in/api/users?page=${this.props.app.page}`)
  }
  render() {
  
    const loading = this.props.app.loading
    if (loading) {
        return <Loader />
    }
    if (this.props.users.length === 0) {
      return <p>Фотографий пока нет! </p>
      }
      else
    return (
      <>
        <h3>Фотографии пользователей сервиса</h3>
        {this.props.users.data.map(task => <li key={task.id}><Task task={task} /></li>)}
      </>
    )
  }
}

function mapState(state) {
    return {
      // users: state.posts.fetchedPosts,
      users: state.posts,
      app: state.app
    }
  }
const mapDispatchToProps = dispatch => {
  return {
    newChangedPost: url => dispatch(scrollPostsPagination(url))
  };
};
export default connect(mapState, mapDispatchToProps)(Main);
// rsf