import userImg from '../assets/userq.jpg'

export function Home() {
    return (
        <div id='home' className="lg:flex-row pt-28 lg:pt-32 h-full w-full flex flex-col-reverse relative items-center sm:px-20">

            <div className="relative text-center items-center lg:text-left -top-10 z-30 lg:w-[50%] flex flex-col lg:items-start justify-center px-10">
                <h1 className="text-xl p-2 bg-green-900 rounded-md lg:bg-transparent lg:p-0 sm:text-5xl">André Fernandes</h1>
                <p className="text-xl sm:text-3xl pb-5 text-green-700">Front-end Developer</p>
                <span className="sm:text-xl text-justify">
                    Formado em Técnico de Informática pelo IFF e formando em Marketing pela UCAM.
                    Sou o tipo de pessoa curiosa, que gosta de entender como as coisas funcionam e sempre procurando por formas de facilitar/agilizar os processos rotineiros. Tenho um bom raciocínio logico e aprendo coisas novas com certa rapidez.
                </span>
            </div>

            <div className="relative h-auto w-[100%] sm:w-[80%] lg:w-[50%] flex justify-center items-center lg:mb-20">
                <img src={userImg} className="w-[70%] lg:w-[90%] h-full border-4 border-green-900 rounded-full object-cover z-20" />
            </div>

        </div>
    )
}