import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { RxCross2 } from "react-icons/rx";



export const Services = () => {

const [isOpen, setIsOpen] = useState(false);
const closeModal = () => setIsOpen(false);

 const [serviceImg,setServiceImg] = useState({})
 const [subHead,setSubHed] = useState("")
 const [head,setHead] = useState("")
 const [showImg,setShowImg] = useState(false) 
 const [list,setList] = useState([])
 const [id,setId] = useState("")
 const [img,setImg] = useState("")


 const openModal = (item) =>{
  // console.log(item._id);
  setIsOpen(true);
  setSubHed(item.subHead)
  setHead(item.head)
  setShowImg(item.showImg)
  setId(item._id)
  setImg(item.serImg)
  
}

 const handleSubHead =(e)=>{
    setSubHed(e.target.value)
 }

 const handleHead =(e)=>{
    setHead(e.target.value)
 }

 const handleImgShow =(e)=>{
    setShowImg(e.target.checked)
 }

 const handleFile =(e)=>{
  setServiceImg(e.target.files[0])
 }


 const handleSubmit =()=>{

  let data = new FormData()
   data.append("subHead",subHead)
   data.append("head",head)
   data.append("showImg",showImg)
   data.append("serImg",serviceImg)

   if(id){
    axios.put(`https://dainamic-portfolio-backend.vercel.app/services/${id}`,data).then(res=>{

      console.log(res);
      setIsOpen(false);
      
      setSubHed('')
      setHead('')
      setShowImg('')

      toast.success('Services Updated', {
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
    axios.post('https://dainamic-portfolio-backend.vercel.app/service',data).then(res=>{
      console.log(res);
      setSubHed('')
      setHead('')
      setShowImg('')

      toast.success('Services Created', {
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
   async  function data(){
        let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/serviceItem')
        // console.log(data.data);
        setList(data.data)
        
    }
    data()
  },[])

  const handleDelete =(item)=>{
   console.log(item._id);

   axios.delete(`https://dainamic-portfolio-backend.vercel.app/service/${item._id}`).then(res=>{

    console.log(res.data);

    toast.success('Delete Success', {
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


      async  function data(){
        let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/serviceItem')
        // console.log(data.data);
        setList(data.data)
        
    }
    data()
    
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



  return (
    <>
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
     <h4 className='font-serif text-center m-0'>Service</h4>
  <div className="mb-4">
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

  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="menu-name">
      Sub Head
    </label>
    <input
      value={subHead}
      onChange={handleSubHead}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Sub Head"
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="menu-name">
      Head
    </label>
    <input
      value={head}
      onChange={handleHead}
      className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="text"
      id="menu-name"
      placeholder="Head"
    />
  </div>


  <div className="mb-4 flex items-center">
    <input
     checked={showImg}
     onChange={handleImgShow}
     className="my-2 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
    <label className="text-sm ps-2 text-gray-700" htmlFor="show-button">Show Image</label>
  </div>

  <div className="mt-6 text-center">
    <button
      onClick={handleSubmit}
      className="px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</div>


{/* table  */}


   <section className='mt-5'>
   <table>

        <thead>
            <tr>
                <th>SR</th>
                <th className="image-column text-center">Image</th>
                <th className="title-column text-center ">Title</th>
                <th className="title-column text-center ">Sub Title</th>
                <th className="button-column  text-center">Show Img</th>
                <th className='text-center'>Actions</th>
            </tr> 
        </thead>

        <tbody>
             
            {list.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                  <td class="image-column">
                      {item.showImg ? <img src={`https://dainamic-portfolio-backend.vercel.app/${item.serImg}`} alt="Placeholder Image"/>: "Preview" }  
                  </td>
                  <td className="title-column">{item.subHead}</td>
                  <td className="title-column">{item.head}</td>

                  <td className="button-column">
                      <button>{
                        item.showImg ? "Yes":"No"
                        }</button>
                  </td>

                  <td>
                      <button className="action-btn edit-btn" onClick={()=>{openModal(item)}} >Edit</button>
                      <button className="action-btn delete-btn" onClick={()=>{handleDelete(item)}}>Delete</button>
                  </td>
              </tr>
            ))}

        </tbody>
    </table>
   </section>

   {/* popop modal  */}

   <div>
          

            {isOpen && (
                <div className="modal-overlay">
                    <div className=" position-relative">
                        
                          <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
                                 <h4 className='font-serif text-center m-0'>Service</h4>

                                 <img src={`https://dainamic-portfolio-backend.vercel.app/${img}`} alt="" />

                      <div className="mb-2">
                     <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
                          Upload File
                     </label>
                     <input
                       onChange={handleFile}
                       className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none                  focus:ring-2 focus:ring-indigo-500"
                       type="file"
                       id="file-upload"
                     />
                   </div>




                      <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="menu-name">
                          Sub Head
                        </label>
                        <input
                          value={subHead}
                          onChange={handleSubHead}
                          className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none  focus:ring-2 focus:ring-indigo-500"
                          type="text"
                          id="menu-name"
                          placeholder="Sub Head"
                        />
                      </div>

                       <div className="mb-2">
                         <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="menu-name">
                           Head
                         </label>
                         <input
                           value={head}
                           onChange={handleHead}
                           className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           type="text"
                           id="menu-name"
                           placeholder="Head"
                         />
                       </div>


                         <div className="mb-2 flex items-center">
                           <input
                            checked={showImg}
                            onChange={handleImgShow}
                            className="my-2 h-4 w-4 border-[#E0E0E0] rounded-sm focus:ring-2 focus:ring-indigo-500" type="checkbox" />
                           <label className="text-sm ps-2 text-gray-700" htmlFor="show-button">Show Image</label>
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

                        <button onClick={closeModal} className="close-modal-btn"><RxCross2 /></button>
                    </div>
                </div>
            )}
        </div>

   <ToastContainer />

    </>
  )
}
