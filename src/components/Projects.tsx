import { useEffect, useState } from 'react'
import {getProjectsAction} from '../services/actions/projectsAction.jsx'

export function Projects() {

    const [projects, setProjects] = useState<any[]>([])

    useEffect(() => {
        const getProjects = async () => {
            const data: any = await getProjectsAction();
            setProjects(data)
          }
          getProjects();
    }, [])

    return (
            <div id='projects' className="relative w-full h-full flex flex-col-reverse justify-center items-center bg-black sm:px-20 lg:px-2 lg:left-1/2 lg:translate-x-[-50%]">
                <div className="max-w-7xl flex relative flex-col h-full w-full py-5 bg-black bg-opacity-40 border-x-2 border-zinc-900 border-opacity-80 backdrop-blur-sm pt-28 lg:pt-32">
                <p className="flex mx-5 sm:mx-16 text-4xl border-b-2 w-56 border-green-500 pb-3 z-10">Projetos</p>
                
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-full h-auto content-around justify-items-center py-6">
                {projects.map((project) => (
                    <a key={project.name} target='_blank' href={project.link} className='flex py-6 justify-center'>
                        <div className='flex relative items-center flex-col mx-5 lg:w-[80%] justify-center rounded-md bg-green-600 bg-opacity-40 duration-500 sm:hover:scale-105 hover:bg-opacity-100 hover:bg-green-900 lg:hover:scale-125 hover:z-50'>
                            <img src={project.img} className="relative w-full rounded-t-md" />
                            <p className='flex flex-col justify-center w-full h-[50%] text-center p-2'>
                                <span className='font-bold'>{project.name}</span>
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
    )
}