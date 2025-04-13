const Footer = () => {



    return (
        <footer className="relative"> 
            <div className="lg:flex flex-row-reverse justify-between lg:w-11/12 px-5 text-sm mx-auto">
            <div className="text-sm text-center lg:flex items-center my-8 font-sans  ">
                <a className="  me-5" href="">Mapa do Site</a>
                <a className="  " href="">Condicoes Legais e privacidade</a>
            </div>
            <div className="flex text-center items-center justify-center ">
                <img className="  flex items-center  w-4 me-1 h-5 font-sans " src="https://br.louisvuitton.com/flags/br.svg" alt="" />
                <span className=" flex items-center  underline lg:h-5 underline-offset-5 lg:text-sm ">Brasil</span>
            </div>
            </div>
            <div className="font-light text-neutral-700/90 text-xs my-10 lg:my-3 text-end gap-10 pe-5 lg:pe-20 pb-20">
                <p>Rua Fidêncio Ramos, 302 CEP 04551-010 São Paulo, SP, Brasil</p>
                <p className="my-2">CNPJ 32.331.472/0001-13</p>
            </div>
            <img className=" scale-200 absolute top-36 hidden lg:flex w-20 lg:w-30 left-1/2 -translate-x-1/2" src="src/images/logo.jpg" alt="" />
        </footer>
    )
}

export default Footer