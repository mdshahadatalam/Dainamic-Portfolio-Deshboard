import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export const Navbar = () => {

  const [logo,setLogo] = useState({})
  const [menu,setMenu] = useState("")
  const [buttonText,setButtonText] = useState("")
  const [showButton,setShowButton] = useState(false)
  const [id,setId]= useState("")
  const [logoImg,setLogoImg] = useState("")
  

 
  const handleSubmit =()=>{
    let data = new FormData()
    data.append("menu",menu)
    data.append("buttonText",buttonText)
    data.append("showButton",showButton)
    data.append("logo",logo)
    // console.log(data.getAll("menu"));
    

    if(id){
      axios.put('https://dainamic-portfolio-backend.vercel.app/navbar/'+id,data).then(res=>{
       console.log(res)
       setMenu('')
       setButtonText('')
       setShowButton('')
       setLogoImg('')

       toast.success('Navbar updated', {
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
        console.log(err)
        
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
    axios.post('https://dainamic-portfolio-backend.vercel.app/navbar',data).then(res=>{
     console.log(res)
     toast.success('Navbar Created', {
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
      console.log(err)
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

  const handleMenu=(e)=>{
    setMenu(e.target.value)
    
  }
 
  const handleButtonText =(e)=>{
    setButtonText(e.target.value)
    
  }

  const handleButtonShow = (e)=>{
    setShowButton(e.target.checked)
  }
  const handleLogo =(e)=>{
  //  console.log(e.target.files[0]);
   setLogo(e.target.files[0])
   
  }





  useEffect(()=>{
    async function data(){
      let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/navItem')
      console.log(data);
      setMenu(data.data.menu)
      setButtonText(data.data.buttonText)
      setShowButton(data.data.showButton)
      setId(data.data._id)
      setLogoImg(data.data.logo)

      
    }
    data()
  },[])

  return (
   <>
  
  <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
     <h4 className='font-serif text-center m-0'>Navbar</h4>

     <img  src={`https://dainamic-portfolio-backend.vercel.app/${logoImg}`} alt="logo Image" />
  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
      Upload File
    </label>
    <input
      onChange={handleLogo}
      className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="file"
      id="file-upload"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="menu-name">
      New Menu
    </label>
    <input
      value={menu}
      onChange={handleMenu}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="New menu"
    />
  </div>

  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="button-text">
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
     onChange={handleButtonShow}
     className="my-2 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
    <label className="text-sm ps-2 text-gray-700" htmlFor="show-button">Show Button</label>
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
