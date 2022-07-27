import { useState } from "react";

export function Header() {
    let navLinks =[
        {name:"Início",link:"#home"},
        {name:"Habilidades",link:"#skills"},
        {name:"Projetos",link:"#projects"},
        {name:"Contato",link:"#contact"},
      ];
    let socialLinks =[
        {name: "fa-brands fa-linkedin-in", link:"https://www.linkedin.com/in/andrefersouza/"},
        {name: "fa-brands fa-facebook-f", link:"https://www.facebook.com/dredeco"},
        {name: "fa-brands fa-github", link:"https://github.com/Dredeco"},
    ];
      let [open,setOpen]=useState(false);

    return (
        <div className="w-full fixed z-50">

            <div className='absolute -z-10 w-full h-36 bg-gradient-to-b from-black via-black to-transparent'/>

            <div className='flex w-full self-center h-28 justify-between items-center px-20'>

                {/* Logo */}
                <a href="/" className="text-2xl flex">
                    <p className="text-green-600 pr-1">&lt;</p> André Fernandes <p className="text-green-600 pl-1">/&gt;</p>
                </a> 

                 {/* Menu */}
                <ul className={`bg-black flex flex-col lg:flex-row absolute lg:static mt-8 lg:mt-0 ml-[-80px] lg:ml-0 w-full lg:w-auto text-center transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                    navLinks.map((link)=>(
                        <li key={link.name} className='lg:ml-8 text-lg font-medium lg:py-0 py-5 border-t lg:border-t-0'>
                        <a href={link.link} className='hover:text-green-600 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>

                {/* Social Menu */}
                <ul className={`bg-black flex justify-center lg:static absolute mt-[302px] lg:mt-0 border-y lg:border-y-0 w-full lg:w-auto ml-[-80px] lg:ml-0 transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                    socialLinks.map((link)=>(
                        <li key={link.name} className='text-center px-8 lg:px-0 lg:ml-8 text-xl lg:py-0 py-7'>
                        <a target='_blank' href={link.link} className='hover:text-green-600 hover:underline underline-offset-2 duration-500'><i className={link.name} /></a>
                        </li>
                    ))
                    }
                </ul>

                <div onClick={()=>setOpen(!open)} className='flex justify-end text-3xl cursor-pointer lg:hidden'>
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>

            </div>
        </div>
    );
}