import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { RxCross2 } from "react-icons/rx";


export const Testimonial = () => {
    
    const [testiImg,setTestiImg] = useState({})
    const [subHead,setSubHead] = useState("")
    const [head,setHead] = useState("")
    const [paragraph,setParagraph] = useState("")
    const [showImg,setShowImg] = useState(false)
    const [list,setList] = useState([])
    const [id,setId] =useState("")
    const [img,setImg] =useState("")

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    const handleSubHead =(e)=>{
        setSubHead(e.target.value)
    }

    const handleHead =(e)=>{
        setHead(e.target.value)
    }

    const handleParagraph =(e)=>{
        setParagraph(e.target.value)
    }
    const handleImgShow =(e)=>{
        setShowImg(e.target.checked)
    }
    const handleFile =(e)=>{
      setTestiImg(e.target.files[0])
    }






    const openModal =(item)=>{
      setIsOpen(true)
      console.log(item._id);
      setSubHead(item.subHead)
      setHead(item.Headers)
      setParagraph(item.paragraph)
      setShowImg(item.showImg)
      setId(item._id)
      setImg(item.tesImg)
        
    }
    
    const handleSubmit =()=>{

      let data = new FormData()
      data.append("subHead",subHead)
      data.append("Headers",head)
      data.append("paragraph",paragraph)
      data.append("showImg",showImg)
      data.append("tesImg",testiImg)

      if(id){
        axios.put(`http://localhost:3000/testimonials/${id}`,data).then(res=>{
          console.log(res);
          setIsOpen(false)
          
          setSubHead('')
          setHead('')
          setParagraph('')
          setShowImg('')
  
          toast.success('Testimonial Updated', {
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
        axios.post('http://localhost:3000/testimonial',data).then(res=>{
  
          console.log(res.data)
          setSubHead('')
          setHead('')
          setParagraph('')
          setShowImg('')
  
          toast.success('Testimonial Created', {
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

   useEffect(()=>{
    async function data() {
        const data = await axios.get('http://localhost:3000/testimonialItem')
        console.log(data.data);
        setList(data.data)
        
        
    }
    data();
   },[])


   const handleDelete =(item)=>{
     console.log(item._id);

     axios.delete(`http://localhost:3000/testimonial/${item._id}`).then(res=>{
      console.log(res);
      toast.success('Testimonial Delete', {
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

        async function data() {
          const data = await axios.get('http://localhost:3000/testimonialItem')
          console.log(data.data);
          setList(data.data)
          
          
      }
      data();
      
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
     <h4 className='font-serif text-center m-0'>Testimonial</h4>
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

{/* table  */}

<section className='mt-5'>
   <table>

        <thead>
            <tr>
                <th>SR</th>
                <th className="image-column text-center">Image</th>
                <th className="title-column text-center ">Sub Head</th>
                <th className="title-column text-center ">Head</th>
                <th className="button-column  text-center">Show Img</th>
                <th className='text-center'>Actions</th>
            </tr> 
        </thead>

        <tbody>
             
            {list.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                  <td class="image-column">
                      {item.showImg ? <img src={`http://localhost:3000/${item.tesImg}`} alt="Placeholder Image"/>: "Preview" }  
                  </td>
                  <td className="title-column">{item.subHead}</td>
                  <td className="title-column">{item.Headers}</td>

                  <td className="title-column">{item.paragraph}</td>

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
                    <div className=" position-relative w-[50%]">
                        
                          <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
                           <h4 className='font-serif text-center m-0'>Resume</h4>
                                                        
                              <img src={`http://localhost:3000/${img}`} alt="image" />
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
                             <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="menu-name">
                               Sub Head
                             </label>
                             <input
                               value={subHead}
                               onChange={handleSubHead}
                               className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none                          focus:ring-2 focus:ring-indigo-500"
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
                           className="w-full h-12 px-4 border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none                      focus:ring-2 focus:ring-indigo-500"
                           type="text"
                           id="menu-name"
                           placeholder="Head"
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
                         className="w-full p-4 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500                            focus:border-blue-500 sm:text-sm text-gray-900 placeholder-gray-400 resize-none"
                            placeholder="Write your content here..."
                         ></textarea>
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
                               className="px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg shadow-md                          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             >
                               Submit
                             </button>
                           </div>
                 </div>

                        <button onClick={closeModal} className="close-modal-btnResume"><RxCross2 /></button>
                    </div>
                </div>
            )}
        </div>

<ToastContainer/>
    </>
  )
}
