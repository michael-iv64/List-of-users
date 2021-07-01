import React, { useState } from 'react';
import UpdateForm from '../forms/UpdateForm';
import CreateForm from '../forms/CreateForm';
import DeleteForm from '../forms/DeleteForm';
import './Task.css'

import {useSelector} from 'react-redux'
const User = ({ task }) => {
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [showDeleteForm, setShowDeleteForm] = useState(false)
    const closeAllForms = useSelector(state => state.app.hideAllForms)


    const showUpdateFormHandler = () => {
        setShowUpdateForm(!showUpdateForm)
        setShowCreateForm(false)
        setShowDeleteForm(false)

    }
    const showCreateFormHandler = () => {
        setShowCreateForm(!showCreateForm)
        setShowUpdateForm(false)
        setShowDeleteForm(false)

    }
    const showDeleteFormHandler = () => {
        setShowDeleteForm(!showDeleteForm)
        setShowCreateForm(false)
        setShowUpdateForm(false)

    }

    const closeForms = () => {
        setShowDeleteForm(false)
        setShowCreateForm(false)
        setShowUpdateForm(false)
    }
    if (closeAllForms) {
        setTimeout(() => {
            closeForms()
        }, 2000)
    }

    return (
        <div className="card-container wrap">
            <div className="card-container">
                <div className="image-container">
                    <img className="round" src={task.avatar} alt=''/>
                        
                    <div className="name-container"> 
                        <span className="firstName">{task.first_name}</span>
                        <span className="lastName">{task.last_name}</span>
                    </div> 
                    <p className="email">{task.email}</p>  
                </div>
        <button className='editButton' onClick={showUpdateFormHandler}>Edit</button>
        <button className='editButton blue' onClick={showCreateFormHandler}>Create</button>
        <button className='editButton red' onClick={showDeleteFormHandler}>Delete</button>
        
            </div>
        
            {showUpdateForm ? <UpdateForm task={task}/> : null}
            {showCreateForm ? <CreateForm /> : null}
            {showDeleteForm ? <DeleteForm task={task}/> : null}
    </div>
    )
}
export default User;