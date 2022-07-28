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
        <div className="fixed w-screen z-50">

            <div className='absolute -z-10 w-full h-36 bg-gradient-to-b from-black via-black to-transparent'/>

            <div className='flex w-full self-center py-10 justify-between items-center px-[10%]'>

                {/* Logo */}
                <a href="/" className="text-2xl w-full flex">
                    <p className="text-green-600 pr-1">&lt;</p> André Fernandes <p className="text-green-600 pl-1">/&gt;</p>
                </a> 

                 {/* Menu */}
                <ul className={`flex flex-col lg:flex-row absolute lg:static left-0 mt-8 lg:mt-0 w-full transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                    navLinks.map((link)=>(
                        <li key={link.name} className='relative text-xl w-full'>
                            <a href={link.link} className='flex py-3 lg:py-0 border lg:border-none border-zinc-800 justify-center w-full h-full bg-black hover:bg-green-700 lg:hover:bg-black lg:hover:text-green-600 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>

                {/* Social Menu */}
                <ul className={`bg-black flex justify-center lg:justify-end lg:static absolute mt-[248px] lg:mt-0 border border-zinc-800 lg:border-none w-full lg:w-full left-0 lg:ml-0 transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {
                    socialLinks.map((link)=>(
                        <li key={link.name} className='relative text-center w-full lg:w-auto h-full text-xl font-bold'>
                        <a target='_blank' href={link.link} className='relative flex hover:bg-green-600 w-full lg:w-auto h-full justify-around lg:justify-end py-3 lg:py-0 lg:px-3 lg:hover:bg-black lg:hover:text-green-600 duration-500'><i className={link.name} /></a>
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