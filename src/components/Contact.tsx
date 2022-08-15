import { Footer } from "./Footer";
import emailjs from '@emailjs/browser';

export function Contact() {
    let adressInfo =[
        {name:'Endereço', info:'Rua Maestro Lourenço Soares - IPS - Campos dos Goytacazes / RJ'},
        {name:'Celular', info:'(22) 99797-1144'},
        {name: 'E-mail', info:'andrefersouza@gmail.com'},
    ];

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_ptwinsd', e.target, 'RcD_dB2-94xJ045Fq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div id='contact' className="relative w-full h-full flex flex-col justify-center items-center sm:px-20 lg:px-2 lg:left-1/2 lg:translate-x-[-50%]">
            <div className="max-w-7xl lg:pt-28 flex relative flex-col h-full w-full py-5 bg-black bg-opacity-40 border-x-2 border-zinc-900 border-opacity-80 backdrop-blur-sm rounded-xl">
            <p className="flex relative mx-5 sm:mx-16 text-4xl border-b-2 w-56 border-green-500 pb-3 z-10">Contato</p>
                
                <div className="w-full px-5 lg:px-20">
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

                <div className="flex flex-col w-full h-full pt-12 px-5 lg:px-20">
                    <p className="flex text-lg pb-2">Entre em contato!</p>
                
                    <form onSubmit={sendEmail}>
                        <div className="flex flex-row w-full justify-between items-center text-black">
                            <input type='text' name="user_name" placeholder="Nome" className="w-[48%] items-center resize-none border-2 border-green-500 p-1"></input>
                            <input type='text' name="user_phone" placeholder="Telefone" className="w-[48%] resize-none border-2 border-green-500 p-1"></input>
                        </div>

                        <input type='email' name="user_email" placeholder="E-mail" className="w-full my-10 text-black resize-none border-2 border-green-500 p-1"></input>
                        <textarea name="message" placeholder="Mensagem" className="w-full p-1 h-40 text-black resize-none border-2 border-green-500"></textarea>

                        <button type="submit" value="Send" className="w-20 h-10 bg-green-600 mt-10 rounded mb-2">Enviar</button>
                    </form>
                </div>
                

                <Footer />
            </div>
        </div>
    )
}