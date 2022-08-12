import SkillsBg from '../assets/skills-background.jpg'

export function Skills() {   

    let skillItems =[
    {name:"HTML5",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name:"CSS3",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name:"JavaScript",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name:"React Js",rate:"Itermediário%", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name:"Tailwind CSS",rate:"Itermediário%", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
  ];

    return (
        <div id='skills' className="relative w-full h-full pt-24 flex flex-col-reverse justify-center items-center sm:px-20 lg:px-2 lg:left-1/2 lg:translate-x-[-50%] lg:pt-28">
            <img src={SkillsBg} alt="" className="hidden lg:block absolute h-full w-full left-0"/>
            <div className="max-w-7xl flex relative flex-col h-full w-full py-5 bg-black bg-opacity-40 border-x-2 border-zinc-900 border-opacity-80 backdrop-blur-sm rounded-xl">

            <p className="flex relative mx-5 sm:mx-16 text-4xl border-b-2 w-56 border-green-500 pb-3 z-10">Habilidades</p>

            <ul className='flex flex-wrap relative h-full w-full justify-around lg:flex-col lg:flex-nowrap lg:pt-8 z-10'>
                {
                skillItems.map((skills)=>(
                   <li key={skills.name} className='flex-row flex relative w-[35%] sm:py-8 lg:w-full lg:px-20'>
                        <p className='relative w-full py-4 whitespace-nowrap flex flex-col text-2xl items-center flex-wrap lg:mr-16 lg:w-[25%] lg:text-3xl'>
                            {skills.name}
                            <img src={skills.path} className="w-[100%] lg:hidden" />
                        </p>
                        <div key={skills.name} className="lg:flex relative w-full hidden items-center">
                            
                            <div className={`hidden lg:flex h-2 bg-green-500 z-10 border border-green-800 ${skills.rate === 'Avançado' ? 'animate-animate_bar_100' : 'animate-animate_bar_50'}`} />
                            
                            <ul className="absolute h-2 hidden lg:flex w-full mt-11">
                                <div className="relative flex w-full justify-between bottom-7 z-20">
                                    <div className="w-5 h-5 bg-green-500 rounded-full border border-green-700"/>
                                    <div className="w-5 h-5 bg-green-500 rounded-full border border-green-700"/>
                                    <div className={`w-5 h-5 rounded-full ${skills.rate === 'Avançado' ? 'bg-green-500 border border-green-700' : 'bg-transparent'}`} />
                                </div>
                                <div className="absolute flex justify-between -left-2 w-[102%]">
                                    <li>Básico</li>
                                    <li className="pl-4">Intermediário</li>
                                    <li>Avançado</li>
                                </div>
                            </ul>
                        </div>
                    </li>
                ))
                }
            </ul>
            </div>
        </div>
    )
}