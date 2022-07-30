export function Footer() {
    let navLinks =[
        {name:"Início",link:"/"},
        {name:"Habilidades",link:"#skills"},
        {name:"Projetos",link:"#projects"},
        {name:"Contato",link:"#contact"},
      ];
    let socialLinks =[
        {name: "fa-brands fa-linkedin-in", link:"https://www.linkedin.com/in/andrefersouza/"},
        {name: "fa-brands fa-facebook-f", link:"https://www.facebook.com/dredeco"},
        {name: "fa-brands fa-github", link:"https://github.com/Dredeco"},
    ];

    return(
        <div className="flex relative w-full bg-black px-5 text-center lg:px-20 py-2 lg:py-5 border-t-2 z-50">
            <div className="flex flex-col sm:flex-row w-full h-auto items-center">
                <ul className={`lg:flex lg:flex-row hidden relative flex-col w-full h-auto text-lg`}>
                    {
                    navLinks.map((link)=>(
                        <li key={link.name} className='flex h-full justify-between'>
                        <a href={link.link} className='flex pr-10 hover:text-green-600 duration-500'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className="w-full lg:text-center">Todos os direitos reservados a André Fernandes, 2022</div>
                <ul className={`flex w-full h-auto justify-center sm:justify-end`}>
                    {
                    socialLinks.map((link)=>(
                        <li key={link.name} className='text-center px-8 py-1 text-xl'>
                        <a target='_blank' href={link.link} className='hover:text-green-600 duration-500'><i className={link.name} /></a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}