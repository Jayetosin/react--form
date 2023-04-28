import React from 'react'
import { useState } from "react";
import "../styles/style.css"

const Contact = () => {
    const [register, handleSubmit , error]= useState();
    const handleRegistration =(data) =>
    console.log(data)
    const handleError =(error) =>{}
    const registerOption ={
        name:{required:"Name is required"},
        email:{required:"email is required"},
        message:{required:"message is required"},
    }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration ,handleError)}>
        <div>
            <label>Name</label>
            <input type="text" name="Name" {...register('name' ,registerOption.name)}/>
            <small className='text-danger'>
             {error?.name && error.name.message}
            </small>
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" {...register('email',registerOption.email)}/>
            <small className='text-danger'>
             {error?.email && error.email.message}
            </small>
        </div>
        <div>
            <label>Subject</label>
            <input type="subject" name="subject" {...register('subject')}/>
        </div>
        <div>
            <label>Message</label>
            <input type="message" name="message" {...register('message',registerOption.message)}/>
            <small className='text-danger'>
             {error?.message && error.message.message}
            </small>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
