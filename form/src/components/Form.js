import React , {useState} from 'react'
import Axios from 'axios'
import "../styles/style.css"

const Form = () => {
  const url="https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries"
  const[error] =useState()
  const [data , setData ]= useState({
    "id" : 3 ,
    "name" :"" ,
    "Email" : "",
    "Subject" :"Subject",
    "Message" :"Message"
  })
  const handleError =(error) =>{}
  function submit(e){
    e.preventDefault();
    Axios.form(url, {
      name:data.Name,
      Email:data.Email,
      Subject:data.Subject,
      Message:data.Message,
  })
    .then(response =>{
      console.log(response.data)
    })
  }


  function handle(e){
    const newData ={...data}
    newData[e.target.id] =e.target.value
    setData(newData)
    console.log(newData)
  }
  const registerOption ={
    name:{required:"Name is required"},
    email:{required:"email is required"},
    message:{required:"message is required"},
}
  
  return (
    <div className='form'>
        <h2>Contact Form</h2>


      <form onSubmit ={(e) =>submit(e)(handleError)}>
        <div>
        <input onChange={(e) =>handle(e)} id='name' value={data.name(registerOption.name)}  placeholder='Name' type='text'/>
        <small className='text-danger'>
             {error?.name && error.name.message}
            </small>
        </div>
        <div>
        <input onChange={(e) =>handle(e)} id='email' value={data.Email(registerOption.email)}  placeholder='Email' type='text'/>
        <small className='text-danger'>
             {error?.email && error.email.message}
            </small>
        </div>
         <input onChange={(e) =>handle(e)} id='subject' value={data.Subject}  placeholder='Subject' type='text'/>
         <div className='message'>
         <input onChange={(e) =>handle(e)} id='message' value={data.Message(registerOption.message)}  placeholder= 'Message' type='text' />
         <small className='text-danger'>
             {error?.message && error.message.message}
            </small>
         </div>
          <button>Submit</button>
        </form>

    </div>
  )
}

export default Form
