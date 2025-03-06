import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const Portfolio = () => {

    const [PortImg,setPortImg] = useState({})
    const [list,setList] = useState([])

    const handlePortImg =(e)=>{
        setPortImg(e.target.files[0])
    }

    const handleSubmit =()=>{
        let data = new FormData()
        data.append("portImg",PortImg)
        axios.post('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/portfolio',data).then(res=>{
            console.log(res.data)
            toast.success('Portfolio Created', {
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
    
    const handleDelete =(item)=>{
        console.log(item._id);

        axios.delete(`https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/portfolios/${item._id}`).then(res=>{
            console.log(res);
            toast.success('Portfolio Delete', {
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
                async function data(){
                    let data = await axios.get('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/portItem')
                    console.log(data);
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






    useEffect(()=>{
        async function data(){
            let data = await axios.get('https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/portItem')
            console.log(data);
            setList(data.data)
            
            }
        data()
    },[])
    
  return (
  <>
  <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto">
     <h4 className='font-serif text-center m-0'>Portfolio</h4>

     {/* <img  src={`http://localhost:3000/${logoImg}`} alt="logo Image" /> */}
  <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
      Upload File
    </label>
    <input
      onChange={handlePortImg}
      className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="file"
      id="file-upload"
    />
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


<table className="table table-bordered mt-5">
    <thead>
        <tr>
            <th className='text-center'  scope="col">SR</th>
            <th className='text-center' scope="col">Image</th>
            <th className='text-center' scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        {list.map((item, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td className='d-flex justify-center'>
                    <img 
                        className="img-fluid" 
                        width={80} 
                        src={`https://dainamic-portfolio-backend-git-main-md-shahadat-alams-projects.vercel.app/${item.portImg}`} 
                        alt="item" 
                    />
                </td>
                <td>
                    <button 
                        className="btn btn-danger" 
                        onClick={() =>{handleDelete(item)}}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>


<ToastContainer/>
  </>
  )
}
