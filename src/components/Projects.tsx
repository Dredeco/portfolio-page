import ProjetoSass from '../assets/projeto-sass.png'
import Projeto2 from '../assets/Projeto2.png'
import NetflixClone from '../assets/Netflix-Clone.png'
import Projeto4 from '../assets/Projeto4.png'
import Projeto5 from '../assets/Projeto5.png'
import SkillsBg from '../assets/skills-background.jpg'
import ProjetoHC from '../assets/projeto_hc.png'

export function Projects() {

    return (
            <div id='projects' className="relative w-full h-full flex flex-col-reverse justify-center items-center bg-black sm:px-20 lg:px-2 lg:left-1/2 lg:translate-x-[-50%]">
                <img src={SkillsBg} alt="" className="hidden rotate-180 lg:block h-full w-full left-0"/>
                <div className="max-w-7xl flex relative flex-col h-full w-full py-5 bg-black bg-opacity-40 border-x-2 border-zinc-900 border-opacity-80 backdrop-blur-sm pt-28 lg:pt-32">

                <p className="flex mx-5 sm:mx-16 text-4xl border-b-2 w-56 border-green-500 pb-3 z-10">Projetos</p>

                <div className="flex-row flex-wrap relative grid lg:grid-cols-2 xl:grid-cols-3 w-full content-around justify-items-center h-full py-6">
                <a target='_blank' href='https://dredeco.github.io/Projeto_HC' className='flex py-3 justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-600 bg-opacity-40 duration-500 sm:hover:scale-105 hover:bg-opacity-100 hover:bg-green-900 lg:hover:scale-125 hover:z-50'>
                            <img src={ProjetoHC} className="relative h-full" />
                            <p className='flex flex-col justify-center w-full text-center p-2'>
                                <h4 className='font-bold'>Coins</h4>
                                Criada utilizando ReactJS, JavaScript, Firebase e SASS
                            </p> 
                        </div>
                    </a>
                    
                    <a target='_blank' href='https://dredeco.github.io/Projeto-sass/' className='flex py-3 justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-600 bg-opacity-40 duration-500 sm:hover:scale-105 hover:bg-opacity-100 hover:bg-green-900 lg:hover:scale-125 hover:z-50'>
                            <img src={ProjetoSass} className="relative h-full" />
                            <p className='flex flex-col justify-center w-full min-h-[30%] text-center py-2'>
                                <h4 className='font-bold'>Landing Page</h4>
                                Criada utilizando ReactJS, Typescript e SASS
                            </p>
                        </div>
                    </a>

                    <a target='_blank' href='https://dredeco.github.io/calculadora/' className='flex py-3 justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-600 bg-opacity-40 duration-500 sm:hover:scale-105 hover:bg-opacity-100 hover:bg-green-900 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto2} className="relative h-full" />
                            <p className='flex flex-col justify-center w-full min-h-[30%] text-center py-2'>
                                <h4 className='font-bold'>Calculadora</h4>
                                Criada utilizando ReactJS, JavaScript e SASS
                            </p> 
                        </div>
                    </a>

                    <a target='_blank' href='https://dredeco.github.io/Netflix-Clone/' className='flex py-3 justify-center'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-600 bg-opacity-40 duration-500 sm:hover:scale-105 hover:bg-opacity-100 hover:bg-green-900 lg:hover:scale-125 hover:z-50'>
                            <img src={NetflixClone} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>
                                <h4 className='font-bold'>Netflix Clone</h4>
                                Criada utilizando ReactJS, Typescript e TailwindCSS
                            </p>
                        </div>
                    </a>

                    <a target='' href='' className='justify-center hidden my-5 lg:flex'>
                        <div className='flex items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto4} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Em breve! <br /> - </p>
                        </div>
                    </a>

                    <a target='' href='' className='hidden my-5 xl:flex justify-center'>
                        <div className='flex items-center flex-col lg:my-0 mx-5 lg:w-[80%] justify-center rounded-md bg-green-800 duration-500 sm:hover:scale-105 lg:hover:scale-125 hover:z-50'>
                            <img src={Projeto5} className="relative w-auto" />
                            <p className='relative w-full text-center py-2'>Em breve! <br /> - </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}