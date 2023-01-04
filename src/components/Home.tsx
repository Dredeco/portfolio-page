import userImg from '../assets/userq.jpg';
import cv from "../assets/Andre Fernandes.pdf";

export function Home() {
    return (
        <div id='home' className="relative pt-28 w-full h-full max-w-6xl flex flex-col-reverse justify-center items-center sm:px-20 lg:px-2 lg:left-1/2 lg:translate-x-[-50%] lg:flex-row lg:pt-48">

            <div className="relative h-full text-center items-center lg:text-left -top-10 z-30 lg:w-full flex flex-col lg:items-start justify-center px-10">
                <h1 className="text-xl p-2 bg-green-900 rounded-md lg:bg-transparent lg:p-0 sm:text-5xl">André Fernandes</h1>
                <p className="text-xl sm:text-3xl pb-5 text-green-700">Front-end Developer</p>
                <span className="sm:text-xl text-justify">
                    Formado em Técnico de Informática pelo IFF e formando em Marketing pela UCAM.
                    Sou o tipo de pessoa curiosa, que gosta de entender como as coisas funcionam e sempre procurando por formas de facilitar/agilizar os processos rotineiros. Tenho um bom raciocínio logico e aprendo coisas novas com certa rapidez.
                </span>
                <a download href={cv} className='bg-gradient-to-r from-green-700 to-green-900 p-3 rounded-md mt-5'><i className='fa-solid fa-file pr-2'></i>Download CV</a>
            </div>

            <div className="relative h-full w-[100%] sm:w-[80%] lg:w-full flex justify-center items-center lg:mb-20">
                <img src={userImg} className="w-[70%] lg:w-[70%] h-full border-4 border-green-900 rounded-full object-cover z-20" />
            </div>

        </div>
    )
}