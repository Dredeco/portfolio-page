import ProjetoSass from '../assets/projeto-sass.png'
import Projeto2 from '../assets/Projeto2.png'
import Projeto3 from '../assets/Projeto3.png'
import Projeto4 from '../assets/Projeto4.png'
import Projeto5 from '../assets/Projeto5.png'
import Projeto6 from '../assets/Projeto6.png'

export function Projects() {

    return (
        <div id='projects' className="flex relative w-full h-full min-h-[1000px] sm:min-h-full snap-start bg-gradient-to-b sm:px-5 lg:px-20 from-green-700 to-black">
            <div className="flex relative flex-col h-full w-full bg-black bg-opacity-40 sm:pt-20 lg:pt-36">

            <p className="flex relative mx-4 sm:mx-16 text-4xl border-b-2 w-56 border-green-700 pb-3">Projetos</p>

                <div className="flex-row flex-wrap grid lg:grid-cols-2 xl:grid-cols-3 w-full content-around justify-items-center h-full my-5">
                    <a target='_blank' href='https://dredeco.github.io/Projeto-sass/#home' className='flex justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={ProjetoSass} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Landing Page <br /> Criada com Vite no ReactJS utilizando Typescript e SASS</p>
                        </div>
                    </a>

                    <a target='' href='' className='flex justify-center'>
                        <div className='flex items-center flex-col my-5 lg:my-0 mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto2} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Landing Page <br /> Criada com Vite no ReactJS utilizando Typescript e SASS</p>
                        </div>
                    </a>

                    <a target='' href='' className='my-5 xl:my-0 flex justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto3} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Landing Page <br /> Criada com Vite no ReactJS utilizando Typescript e SASS</p>
                        </div>
                    </a>

                    <a target='' href='' className='justify-center hidden my-5 lg:flex'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto4} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Landing Page <br /> Criada com Vite no ReactJS utilizando Typescript e SASS</p>
                        </div>
                    </a>

                    <a target='' href='' className='hidden my-5 xl:flex justify-center'>
                        <div className='flex items-center flex-col lg:my-0 mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto5} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Landing Page <br /> Criada com Vite no ReactJS utilizando Typescript e SASS</p>
                        </div>
                    </a>

                    <a target='' href='' className='hidden my-5 xl:flex justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto6} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Landing Page <br /> Criada com Vite no ReactJS utilizando Typescript e SASS</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}