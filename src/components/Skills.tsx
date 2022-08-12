export function Skills() {   

    let skillItems =[
    {name:"HTML5",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name:"CSS3",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    {name:"JavaScript",rate:"Avançado", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name:"React Js",rate:"Itermediário%", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name:"Tailwind CSS",rate:"Itermediário%", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
  ];

    return (
        <div id='skills' className="flex flex-col relative h-full sm:px-5 lg:px-20 w-auto bg-gradient-to-b from-black to-green-700">
            <div className="flex relative flex-col h-full w-full bg-black bg-opacity-40 lg:pt-32">

            <p className="flex relative mx-5 sm:mx-16 text-4xl border-b-2 w-56 border-green-700 pb-3">Habilidades</p>

            <ul className='flex flex-wrap relative h-full w-full justify-around lg:flex-col lg:pt-8'>
                {
                skillItems.map((skills)=>(
                   <li key={skills.name} className='flex-row flex relative w-[35%] sm:py-8 lg:w-full lg:px-20'>
                        <p className='relative w-full py-4 flex flex-col items-center lg:flex-wrap lg:mr-16 lg:w-[25%] lg:text-3xl'>
                            {skills.name}
                            <img src={skills.path} className="w-[100%] lg:hidden" />
                        </p>
                        <div key={skills.name} className="lg:flex relative justify-center w-full hidden items-center">
                            
                            <div className={`h-2 origin-left hidden lg:block bg-green-500 z-10 border border-green-800 transform ${skills.rate === 'Avançado' ? 'animate-animate_bar_100' : 'animate-animate_bar_50'}`} />
                            
                            <ul className="absolute h-2 hidden lg:flex w-full mt-11">
                                <div className="relative flex w-full justify-between bottom-7 z-20">
                                    <div className="w-5 h-5 bg-green-500 rounded-full border border-green-700"/>
                                    <div className="w-5 h-5 bg-green-500 rounded-full border border-green-700"/>
                                    <div className={`w-5 h-5 rounded-full ${skills.rate === 'Avançado' ? 'bg-green-500 border border-green-700' : 'bg-transparent'}`} />
                                </div>
                                <div className="absolute flex justify-between w-full">
                                    <li>Básico</li>
                                    <li className="">Intermediário</li>
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