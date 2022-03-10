import React from 'react'
import { Link } from 'react-router-dom';

const UserInfo = ({user, handleEdit, handleDelete}) => {


  return (
    <React.Fragment key={user.id}>
          <div className='tr'>
            <div className='td'>{user.name}</div>    
            <div className='td'>{user.phone}</div>
            <div className='td'>
                <i className="fas fa-edit" onClick={()=>handleEdit(user.id)}></i>
                <i className="fas fa-trash-alt"  onClick={()=>handleDelete(user.id)}></i>  
                <Link to={`/contact/${user.id}`}><i className="fas fa-eye"></i></Link>
            </div> 
        </div>       
    </React.Fragment>
  )
}

export default UserInfo