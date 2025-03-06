import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { RxCross2 } from "react-icons/rx";

export const Resume = () => {
     

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    const [subHead,setSubHead] = useState("")
    const [head,setHead] = useState("")
    const [paragraph,setParagraph] = useState("")

    const [list,setList] = useState([])
    const [id,setId] = useState("")

    const openModal =(item)=> {
        setIsOpen(true);
        // console.log(item);
        setSubHead(item.subHead)
        setHead(item.head)
        setParagraph(item.paragraph)
        setId(item._id)

    }


    const handleSubHead =(e)=>{
        setSubHead(e.target.value)
    }

    const handleHead =(e)=>{
       setHead(e.target.value)
    }

    const handleParagraph =(e)=>{
        setParagraph(e.target.value)
    }


    const handleSubmit =()=>{
     
    if(id){
        axios.put(`https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/resumes/${id}`,{
            subHead:subHead,
            head:head,
            paragraph:paragraph
        }).then(res=>{
            console.log(res.data);

            setIsOpen(false);
            setSubHead('')
            setHead('')
            setParagraph('')

            toast.success('Resume Update', {
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
        axios.post('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/resume',{
            subHead:subHead,
            head:head,
            paragraph:paragraph
        }).then(res=>{
            console.log(res);
            setSubHead('')
            setHead('')
            setParagraph('')

            toast.success('Resume Created', {
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
        const data = await axios.get('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/resumeItem')
        // console.log(data.data)
        setList(data.data)
        }
        data()
    },[])

   
    const handleDelete =(item)=>{
    // console.log(item._id);
    axios.delete(`https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/resume/${item._id}`).then(res=>{
        console.log(res);
        toast.success('Resume Delete', {
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
                const data = await axios.get('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/resumeItem')
                // console.log(data.data)
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
    <h4 className='font-serif text-center m-0'>Resume</h4>

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
                <th className="title-column text-center ">Sub Head</th>
                <th className="title-column text-center ">Head</th>
                <th className='text-center'>Paragraph</th>
            </tr> 
        </thead>

        <tbody>

                {
                    list.map((item,index)=>(
                        <tr>
                      <td>{index+1}</td>
                      <td>{item.subHead}</td>
                      <td className="title-column">{item.head}</td>
                      <td className="title-column">{item.paragraph}</td>
    
                      <td>
                          <button className="action-btn edit-btn" onClick={()=>{openModal(item)}} >Edit</button>
                          <button className="action-btn delete-btn" onClick={()=>{handleDelete(item)}} >Delete</button>
                      </td>
                  </tr>
                    ))
                }
             

        </tbody>
    </table>
   </section>


   {/* popap modal  */}

   <div>
          

    {isOpen && (
                <div className="modal-overlay">
                    <div className=" position-relative w-[50%]">
                        
                          <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
                           <h4 className='font-serif text-center m-0'>Resume</h4>

                           <div className="mb-4">
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

                   <div className="mb-4">
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


                           <div className="mt-6 text-center">
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
