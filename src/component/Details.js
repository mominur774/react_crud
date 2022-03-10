import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalStore'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../css/Details.css"
import "../css/Home.css"

export const Details = () => {

  const { users } = useContext(GlobalContext);
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(()=>{
    const getUser = () =>{
      users.filter(us=>{
        if(us.id === id){
          setUser(us)
        }
        return user
      })
    }
    getUser();
  }, [id])

  return (
      <>
      
      <div className="container">
        <h1>CRUD with React</h1>
          <div className="details-main">
                <h3>Details of an user</h3>
                <div className="details">
                    <div className="table">
                        <div className="thead">
                            <div className="tr">
                                <div className="th">ID</div>
                                <div className="th">Name</div>
                                <div className="th">Phone</div>         
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="tr">
                                <div className="td">{user.id}</div>
                                <div className="td">{user.name}</div>
                                <div className="td">{user.phone}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='back' to="/">Back</Link>
            </div>
        </div>
      
      </>
  )
}