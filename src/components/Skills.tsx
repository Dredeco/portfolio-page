export function Skills() {   

    let skillItems =[
    {name:"HTML5",rate:"Avançado"},
    {name:"CSS3",rate:"Avançado"},
    {name:"JavaScript",rate:"Avançado"},
    {name:"React Js",rate:"Itermediário%"},
    {name:"Tailwind CSS",rate:"Itermediário%"},
  ];

    return (
        <div id='skills' className="flex relative h-screen min-h-[980px] w-full overscroll-contain bg-gradient-to-b from-black to-green-700">
            
            <ul className='flex relative flex-col h-full w-full justify-evenly bg-black bg-opacity-40 pt-20 mx-20'>
            <p className="flex relative mx-16 text-4xl border-b-2 w-56 border-green-700 pb-3">Habilidades</p>
                {
                skillItems.map((skills)=>(
                   <li key={skills.name} className='lg:flex-row flex-col relative w-full flex items-center py-4 px-20'>
                        <p className='relative mr-16 lg:w-[12%] text-center pl-12 lg:pl-0 lg:text-justify text-3xl py-4'>{skills.name}</p>
                        <div key={skills.name} className="flex relative h-2 w-full">
                            <div className={`h-full bg-green-500 z-10 border border-green-800 origin-left ${skills.rate === 'Avançado' ? 'animate-animate_bar_100' : 'animate-animate_bar_50'}`} />
                            <ul className="absolute flex w-full justify-between left-0 top-4">
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