import { Footer } from "./Footer";

export function Contact() {
    let adressInfo =[
        {name:'Endereço', info:'Rua Maestro Lourenço Soares, 209 - IPS - Campos dos Goytacazes / RJ'},
        {name:'Celular', info:'(22) 99797-1144'},
        {name: 'E-mail', info:'andrefersouza@gmail.com'},
    ];

    return (
        <div id='contact' className="flex flex-col relative w-full h-screen max-h-[800px] bg-black">
            <p className="flex relative mx-16 text-4xl border-b-2 border-green-700 pb-3">Contato</p>
            <div className="w-full px-20">
                <ul className="flex flex-col text-start text-lg w-full pt-20">
                {
                    adressInfo.map((link)=>(
                        <li key={link.name} className='flex flex-row'>
                        <p className='pr-3'>{link.name}:</p>
                        <p className=''>{link.info}</p>
                        </li>
                    ))
                }
                </ul>
            </div>

            <div className="flex flex-col w-full h-full pt-12 px-20">
                <p className="flex text-lg pb-2">Entre em contato!</p>

                <div className="flex flex-row w-full justify-between items-center text-black">
                    <input type='text' placeholder="Nome" className="w-[48%] items-center resize-none border-2 border-green-500 p-1"></input>
                    <input type='text' placeholder="Telefone" className="w-[48%] resize-none border-2 border-green-500 p-1"></input>
                </div>

                <input type='text' placeholder="E-mail" className="w-full my-10 text-black resize-none border-2 border-green-500 p-1"></input>
                <textarea placeholder="Mensagem" className="w-full p-1 text-black resize-none border-2 border-green-500"></textarea>

                <button type="submit" className="w-20 h-10 bg-green-600 mt-10 rounded mb-2">Enviar</button>
            </div>

            <Footer />
        </div>
    )
}