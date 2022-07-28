export function Skills() {   

    let skillItems =[
    {name:"HTML5",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name:"CSS3",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name:"JavaScript",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name:"React Js",rate:"Itermediário%", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name:"Tailwind CSS",rate:"Itermediário%", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
  ];

    return (
        <div id='skills' className="flex relative h-full px-5 lg:px-20 w-auto bg-gradient-to-b from-black to-green-700">
            
            <ul className='flex relative flex-col h-full w-full justify-around bg-black bg-opacity-40 pt-32'>
            <p className="flex relative sm:mx-16 text-4xl border-b-2 w-56 border-green-700 pb-3">Habilidades</p>
                {
                skillItems.map((skills)=>(
                   <li key={skills.name} className='lg:flex-row flex-col relative w-full flex items-center sm:py-8 px-10 lg:px-20'>
                        <p className='relative lg:mr-16 lg:w-[12%] text-center lg:text-justify text-3xl py-4'>{skills.name}</p>
                        <img src={skills.path} className="w-[50%] px-6 sm:hidden" />
                        <div key={skills.name} className="flex relative h-2 w-full">
                            <div className={`h-full hidden sm:block bg-green-500 z-10 border border-green-800 origin-left ${skills.rate === 'Avançado' ? 'animate-animate_bar_100' : 'animate-animate_bar_50'}`} />
                            <ul className="absolute hidden sm:flex w-full justify-between left-0 top-4">
                                <div className="absolute flex w-[101%] -left-1 justify-between bottom-7 z-20">
                                    <div className="w-5 h-5 bg-green-500 rounded-full border border-green-700"/>
                                    <div className="w-5 h-5 bg-green-500 rounded-full border border-green-700"/>
                                    <div className={`w-5 h-5 rounded-full ${skills.rate === 'Avançado' ? 'bg-green-500 border border-green-700' : 'bg-transparent'}`} />
                                </div>
                                <li>Básico</li>
                                <li className="">Intermediário</li>
                                <li>Avançado</li>
                            </ul>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}