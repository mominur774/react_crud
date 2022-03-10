import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalStore';
import validate from './Validate'
import UserInfo from './UserInfo';
import "../css/Home.css"

export const Home = () => {
     
    const{ 
        users, 
        addUser, 
        updateUser,
        deleteUser
    } = useContext(GlobalContext);

    //states
    const[user, setUser] = useState({name: "", phone: ""});
    const[isEdit, setIsEdit] = useState(false);
    const[editId, setEditId] = useState(null);
    const[error, setError] = useState({name: "", phone: ""});
    const[notification, setNotification] = useState("");

    //Control form input field
    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //Add or Update user
    const handleSubmit = e =>{
        e.preventDefault();
        const { isValid, errors } = validate(user);
        setError({
            name: errors.name,
            phone: errors.phone
        })
        if(isValid){
            if(!isEdit){        //For add user
                addUser({
                    id: new Date().getTime().toString(),
                    name: user.name,
                    phone: user.phone
                })
                setNotification("A new user added!")
            } else{         //For update user
                updateUser({
                    id: editId,
                    name: user.name,
                    phone: user.phone
                })
                setIsEdit(false)
                setEditId(null)
                setNotification("User updated successfully!")
            }     
            setUser({name: "", phone: ""})
        }
    }

    //Capture the update button clicked
    const handleEdit = (id) =>{
        users.filter(user=>{
            if (user.id === id){
                setUser({
                    name: user.name,
                    phone: user.phone
                })
            }
            return user
        })
        setIsEdit(true);
        setEditId(id);
    }

    //Capture the delete button clicked
    const handleDelete = (id) => {
        deleteUser(id)
        setNotification("User deleted!")
        setUser({name:"", phone:""})
    }

    //Remove notification
    const removeNotification = () =>{
        setNotification("")
    }

  return (
    <div className='container'>
        <h1>CRUD with React</h1>

        {notification && 
        <div className="alert">
            <span className="closebtn" onClick={removeNotification} >&times;</span> 
            <p>{notification}</p>
        </div>}

        <div className="main">
            <div className="user-inputs">
            <h3>Add/Update an user</h3>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name" name="name" value={user.name} onChange={handleChange} />
                        {error.name && <small className='error'>{error.name}</small>}           
                    </div>
                    <div className="input-row">
                        <label htmlFor="name">Phone</label>
                        <input type="number" placeholder="Enter your phone number" name="phone" value={user.phone} onChange={handleChange} />     
                        {error.phone && <small className='error'>{error.phone}</small>}              
                    </div>
                    {isEdit ? <button type="submit">Update</button> : <button type="submit">Add</button>}      
                </form>
            </div>
            <div className="user-details">
                <h3>List of all users</h3>    
                {users.length > 0 ?
                (
                    <div>
                    <div className='table'>
                        <div className='thead'>
                            <div className='tr'>
                                <div className='th'>Name</div>
                                <div className='th'>Phone</div>
                                <div className='th'>Action</div>
                            </div>
                        </div>
                        <div className='tbody'>
                        {
                            users.map(user=>{
                                return (
                                    <UserInfo key={user.id} user={user} handleEdit={handleEdit} handleDelete={handleDelete} />
                                    )
                                })
                            }
                        </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="no-user">No user added yet!</h2>)
                }
            </div>
        </div>
    </div>
  )
}