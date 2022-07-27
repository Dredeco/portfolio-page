import Projeto1 from '../assets/Projeto1.png'
import Projeto2 from '../assets/Projeto2.png'
import Projeto3 from '../assets/Projeto3.png'
import Projeto4 from '../assets/Projeto4.png'
import Projeto5 from '../assets/Projeto5.png'
import Projeto6 from '../assets/Projeto6.png'

export function Projects() {

    return (
        <div id='projects' className="flex relative w-full h-screen min-h-[900px] snap-start bg-gradient-to-b from-green-700 to-black">
            <div className="flex relative flex-col h-full w-full bg-black bg-opacity-40 pt-36 mx-20">

            <p className="flex relative mx-16 text-4xl border-b-2 w-56 border-green-700 pb-3">Projetos</p>

                <div className="flex-row flex-wrap grid lg:grid-cols-2 xl:grid-cols-3 w-full content-around justify-items-center h-full py-10">
                    <div className='flex items-center flex-col w-fit rounded-md bg-green-800 duration-500 hover:scale-150 hover:z-50'>
                        <img src={Projeto1} className="relative h-48 w-auto" />
                        <p className='relative text-center py-2'>Landing Page <br /> Ultilizando HTML, CSS e JavaScript</p>
                    </div>

                    <div className='flex items-center flex-col w-fit rounded-md mx-1 bg-green-800 duration-500 hover:scale-150 hover:z-50'>
                        <img src={Projeto2} className="relative h-48 w-auto" />
                        <p className='relative text-center py-2'>Landing Page <br /> Ultilizando HTML, CSS e JavaScript</p>
                    </div>

                    <div className='lg:flex hidden items-center flex-col w-fit rounded-md bg-green-800 duration-500 hover:scale-150 hover:z-50'>
                        <img src={Projeto3} className="relative h-48 w-auto" />
                        <p className='relative text-center py-2'>Landing Page <br /> Ultilizando HTML, CSS e JavaScript</p>
                    </div>

                    <div className='lg:flex hidden items-center flex-col w-fit rounded-md bg-green-800 duration-500 hover:scale-150 hover:z-50'>
                        <img src={Projeto4} className="relative h-48 w-auto" />
                        <p className='relative text-center py-2'>Landing Page <br /> Ultilizando HTML, CSS e JavaScript</p>
                    </div>

                    <div className='xl:flex items-center flex-col w-fit hidden rounded-md bg-green-800 duration-500 hover:scale-150 hover:z-50'>
                        <img src={Projeto5} className="relative h-48 w-auto" />
                        <p className='relative text-center py-2'>Landing Page <br /> Ultilizando HTML, CSS e JavaScript</p>
                    </div>

                    <div className='xl:flex items-center flex-col w-fit hidden rounded-md bg-green-800 duration-500 hover:scale-150 hover:z-50'>
                        <img src={Projeto6} className="relative h-48 w-auto" />
                        <p className='relative text-center py-2'>Landing Page <br /> Ultilizando HTML, CSS e JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    )
}