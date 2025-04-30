import React, { useState } from 'react'

export default function AddUsers() {
  const[user,setUser] = useState({
    name:"",
    username:"",
    email:""
  })

const{name,username,email} =user

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register User</h2>

                <div className='mb3'> 
                  <label htmlFor='Name' className='form-label'> Name</label>
                  <input type={"text"} className='form-control' placeholder="Enter your name" name='name' value={name}/>
                </div>

                <div className='mb3'> 
                  <label htmlFor='Username' className='form-label'> User name</label>
                  <input type={"text"} className='form-control' placeholder="Enter your User name" name='name' value={username}/>
                </div>

                <div className='mb3'> 
                  <label htmlFor='Name' className='form-label'> Email</label>
                  <input type={"text"} className='form-control' placeholder="Enter your Email" name='name' value={email}/>
                </div>

                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>

            </div>
        </div>
      
    </div>
  )
}
 