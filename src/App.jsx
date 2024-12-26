import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { Banner } from './Component/Banner';
import { About } from './Component/About';
import { Services } from './Component/Services';


import 'react-toastify/dist/ReactToastify.css';
import { Resume } from './Component/Resume';
import { Testimonial } from './Component/Testimonial';
import { Blog } from './Component/Blog';
import { Portfolio } from './Component/Portfolio';
import { Contact } from './Component/Contact';

function App() {

  const [ menu, setMenu] = useState('Navbar')

  const handleMenu = (menu)=>{
    console.log(menu);
    setMenu(menu)
    
  }

  return (
    <>
      <section className='font-serif py-5 bg-[#FFF5EF]'>
        <div className="container">
          <h4 className='text-center m-0'>Dashboard</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className='bg-white shadow-md rounded-md p-4'>
                <li onClick={()=>handleMenu("Navbar")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Navbar</li>
                <li onClick={()=>handleMenu("Banner")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Banner</li>
                <li onClick={()=>handleMenu("About")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>About</li>
                <li onClick={()=>handleMenu("Service")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Service</li>
                <li onClick={()=>handleMenu("Resume")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Resume</li>
                <li onClick={()=>handleMenu("Portfolio")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Portfolio</li>
                <li onClick={()=>handleMenu("Testimonial")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Testimonial</li>
                <li onClick={()=>handleMenu("Blog")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Blog</li>
                <li onClick={()=>handleMenu("Contact")} className='list-none p-2 m-2 rounded-sm shadow-sm hover:bg-slate-600 hover:text-white text-center cursor-pointer border border-back'>Contact</li>
              </div>
            </div>
            <div className="col-lg-8">

              <div className='  p-3 m-3'>
                 {  menu === "Navbar" && <Navbar/>}
                 {  menu === "Banner" && <Banner/>}
                 {  menu === "About" && <About/>}
                 {  menu === "Service" && <Services/>}
                 {  menu === "Resume" && <Resume/>}
                 {  menu === "Portfolio" && <Portfolio/>}
                 {  menu === "Testimonial" && <Testimonial/>}
                 {  menu === "Blog" && <Blog/>}
                 {  menu === "Contact" && <Contact/>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
