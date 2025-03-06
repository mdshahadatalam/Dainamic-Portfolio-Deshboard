import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,SetPhone] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")

  const handleName =(e)=>{
    setName(e.target.value)
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }

  const handlePhone =(e)=>{
    SetPhone(e.target.value)
  }
  const handleSubject =(e)=>{
    setSubject(e.target.value)
  }
  const handleMessage =(e)=>{
    setMessage(e.target.value)
  }

  const handleSubmit =()=>{
    console.log(name,email,phone,subject,message);

    axios.post('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/emailSend',{name,email,phone,subject,message}).then((res)=>{
      console.log(res);  
      setName('')
      setEmail('')
      SetPhone('')
      setSubject('')
      setMessage('')

      toast.success('Successfully Send', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    }).catch((err)=>{
      console.log(err);
      toast.error('Please try again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
      
    })
    
  }





  return (
    <>

<div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
 <h4 className='font-serif text-center m-0'>Contact</h4>

 

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
     Your Name
    </label>
    <input
      value={name}
      onChange={handleName}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Name"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" >
     Your Email
    </label>
    <input
      value={email}
      onChange={handleEmail}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="email"
      id="menu-name"
      placeholder="Email"
    />
  </div>



  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Your Phone
    </label>
    <input
      value={phone}
      onChange={handlePhone}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="number"
      id="button-text"
      placeholder="Your Phone"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Subject
    </label>
    <input
      value={subject}
      onChange={handleSubject}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="button-text"
      placeholder="Subject"
    />
  </div>


  <div className="max-w-xl mx-auto">
  <label  className="block text-sm font-semibold text-gray-700 mb-2">
   Your message
  </label>
  <textarea
    value={message}
     onChange={handleMessage}
    id="dashboardTextarea"
    rows="5"
    className="w-full p-4 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 placeholder-gray-400 resize-none"
    placeholder="Write your content here..."
  ></textarea>
</div>



  <div className="mt-3 text-center">
    <button
       onClick={handleSubmit}
      className="px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</div>
<ToastContainer/>
    </>
  )
}
