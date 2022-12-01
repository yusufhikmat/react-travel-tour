import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='form-container'>
  
  <h3>Send a message to us</h3>

 <form className="form">

    <div className="">

       
       <input
            type="text"
            name="firstName"
            placeholder='First Name'
            className="firstName"
            tabIndex="1"
       />
       </div>
       <div>
      
       <input
            type="text"
            placeholder='Last Name'
            name="lastName"
            className="lastName"
            tabIndex="2"
       />
    </div>
    <div>
       
       <input
            type="text"
            placeholder='Email '
            name="lastName"
            className="lastName"
            tabIndex="2"
       />
    </div>
    
    <textarea rows={10} cols={10}>Message</textarea>
    <div>
        <button>Submit</button>
    </div>
 </form>
</div>
  )
  }

export default ContactForm