import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const About = () => {


  const [aboutImg,setAboutImg] = useState({})
  const [subHead,setSubHead] = useState("")
  const [head,setHead] = useState("")
  const [paragraph,setParagraph] = useState("")
  const [projectNumber,setProjectNumber] = useState("")
  const [experience,setExperience] = useState("")
  const [buttonText,setButtonText] = useState("")
  const [showButton,setShowButton] = useState(false)
  const [img,setImg] = useState("")

  const [id,setId] = useState("")

  const handleSubHead =(e)=>{
    setSubHead(e.target.value)
  }

  const handleHead =(e)=>{
    setHead(e.target.value)
  }
  const handleParagraph =(e)=>{
    setParagraph(e.target.value)
  }
  const handleProjectNumber =(e)=>{
    setProjectNumber(e.target.value)
  }
 const handleYear =(e)=>{
    setExperience(e.target.value)
 }
 const handleButtonText =(e)=>{
    setButtonText(e.target.value)
 }
 const handleShowButton =(e)=>{
    setShowButton(e.target.checked)
 }

 const handleFile =(e)=>{
  setAboutImg(e.target.files[0])
 }

 

   const handleSubmit =()=>{

    let data = new FormData()
     data.append("subHead",subHead)
     data.append("head",head)
     data.append("paragraph",paragraph)
     data.append("projectNum",projectNumber)
     data.append("experience",experience)
     data.append("buttonText",buttonText)
     data.append("showButton",showButton)
     data.append("aboutImg",aboutImg)

    if(id){
        axios.put('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/about/'+id,data).then(res=>{
            console.log(res);
            setSubHead('')
            setHead('')
            setParagraph('')
            setProjectNumber('')
            setExperience('')
            setButtonText('')
            setShowButton('')


            toast.success('About updated', {
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
            
        }).catch(err=>{
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
    }else{

        axios.post('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/about',data).then(res=>{
        console.log(res);
        toast.success('About Created', {
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
        
    }).catch(err=>{
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



    }

    useEffect(()=>{
        async function data() {
            let data = await axios.get('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/aboutItem')
             console.log(data);
             setSubHead(data.data.subHead)
             setHead(data.data.head)
             setParagraph(data.data.paragraph)
             setProjectNumber(data.data.projectNum)
             setExperience(data.data.experience)
             setButtonText(data.data.buttonText)
             setShowButton(data.data.showButton)
             setId(data.data._id)
             setImg(data.data.aboutImg)
            
        }
        data()
    },[])

  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">

    <h4 className='font-serif text-center m-0'>About</h4>
 
    <img width={50} src={`https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/${img}`} alt="Image" />
    <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
      Upload File
    </label>
    <input
      onChange={handleFile}
      className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="file"
      id="file-upload"
    />
  </div>

<div className="mb-2">
  <label className="block text-sm font-semibold text-gray-700 mb-2" >
    Subheading
  </label>
  <input
     value={subHead}
    onChange={handleSubHead}
    className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type="text"
    id="menu-name"
    placeholder="Subheading"
  />
</div>

<div className="mb-2">
  <label className="block text-sm font-semibold text-gray-700 mb-2" >
   Heading
  </label>
  <input
    value={head}
    onChange={handleHead}
    className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type="text"
    id="menu-name"
    placeholder="Heading"
  />
</div>

<div className="max-w-xl mx-auto">
<label  className="block text-sm font-semibold text-gray-700 mb-2">
 Paragraph
</label>
<textarea
  value={paragraph}
  onChange={handleParagraph}
  id="dashboardTextarea"
  rows="5"
  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 placeholder-gray-400 resize-none"
  placeholder="Write your content here..."
></textarea>
</div>

<div className="mb-2">
  <label className="block text-sm font-semibold text-gray-700 mb-2" >
  Project Number
  </label>
  <input
    value={projectNumber}
    onChange={handleProjectNumber}
    className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type="number"
    id="menu-name"
    placeholder="Project Number"
  />
</div>


<div className="mb-2">
  <label className="block text-sm font-semibold text-gray-700 mb-2" >
   Year
  </label>
  <input
    value={experience}
    onChange={handleYear}
    className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type="number"
    id="menu-name"
    placeholder="Year"
  />
</div>


<div className="mb-2">
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Button Text
  </label>
  <input
    value={buttonText}
    onChange={handleButtonText}
    className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type="text"
    id="button-text"
    placeholder="Button text"
  />
</div>

<div className="mb-2 flex items-center">
  <input
   checked={showButton}
   onChange={handleShowButton}
   className="my-1 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
  <label className="text-sm ps-2 text-gray-700" >Show Button</label>
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
