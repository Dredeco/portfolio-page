import userImg from '../assets/userq.jpg'

export function Home() {
    return (
        <div id='home' className="lg:flex-row pt-32 lg:h-full w-full flex flex-col-reverse overscroll-contain relative items-center px-20">

            <div className="relative lg:w-[50%] flex flex-col lg:items-start justify-center py-10 lg:py-0 px-10">
                <h1 className="text-5xl">André Fernandes</h1>
                <p className="text-3xl pb-5 text-green-700">Front-end Developer</p>
                <span className="text-xl text-justify">
                    Formado em Técnico de Informática pelo IFF e formando em Marketing pela UCAM.
                    Sou o tipo de pessoa curiosa, que gosta de entender como as coisas funcionam e sempre procurando por formas de facilitar/agilizar os processos rotineiros. Tenho um bom raciocínio logico e aprendo coisas novas com certa rapidez.
                </span>
            </div>

            <div className="relative lg:h-auto w-[50%] flex justify-center items-center lg:mb-20">
                <img src={userImg} className="w-[90%] h-full border-4 border-green-900 rounded-full object-cover z-20" />
            </div>

        </div>
    )
}