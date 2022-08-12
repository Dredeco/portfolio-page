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
        <div className="flex justify-center fixed w-full z-50">

            <div className='absolute -z-10 w-full h-36 bg-gradient-to-b from-black via-black to-transparent'/>

            <div className='flex py-5 w-full max-w-[1400px] justify-around items-center lg:py-8 lg:px-8'>

                {/* Logo */}
                <a href="/" className="text-2xl flex flex-wrap flex-shrink-0 lg:text-2xl">
                    <p className="text-green-600 pr-1">&lt;</p> André Fernandes <p className="text-green-600 pl-1">/&gt;</p>
                </a>

                 {/* Menu Mobile */}
                 <div className={`flex flex-col absolute w-full mt-2 lg:hidden transition-all duration-500 ${open ? 'top-20 ':'top-[-490px]'}`}>
                    <ul className="flex flex-col relative w-full transition-all duration-500">
                        {
                        navLinks.map((link)=>(
                            <li key={link.name} className='relative px-2 text-xl w-full'>
                                <a href={link.link} className='flex py-3 border lg:border-none border-zinc-800 justify-center w-full h-full bg-black hover:bg-green-700 lg:hover:bg-black lg:hover:text-green-600 duration-500'>{link.name}</a>
                            </li>
                        ))
                        }
                    </ul>

                    <ul className={`flex relative border mx-2 border-zinc-800`}>
                        {
                        socialLinks.map((link)=>(
                            <li key={link.name} className='relative w-full text-xl font-bold'>
                            <a target='_blank' href={link.link} className='relative border border-zinc-800 h-full py-3 justify-center flex bg-black hover:bg-green-600 lg:justify-end lg:py-0 lg:px-3 lg:hover:bg-black lg:hover:text-green-600 duration-500'><i className={link.name} /></a>
                            </li>
                        ))
                        }
                    </ul>
                 </div>

                <div onClick={()=>setOpen(!open)} className='flex justify-end text-3xl cursor-pointer mt-1 lg:hidden'>
                    <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>


                {/* Desktop Menu */}
                <div className="hidden lg:flex w-full justify-between">
                    <ul className="flex relative w-full justify-center">
                        {
                        navLinks.map((link)=>(
                            <li key={link.name} className='relative px-5 text-xl'>
                                <a href={link.link} className='flex py-3 hover:text-green-600 duration-500'>{link.name}</a>
                            </li>
                        ))
                        }
                    </ul>

                    <ul className={`flex relative`}>
                        {
                        socialLinks.map((link)=>(
                            <li key={link.name} className='relative w-full mt-3 px-5 text-xl font-bold'>
                            <a target='_blank' href={link.link} className='relative lg:hover:text-green-600 duration-500'><i className={link.name} /></a>
                            </li>
                        ))
                        }
                    </ul>
                 </div>

            </div>
        </div>
    );
}