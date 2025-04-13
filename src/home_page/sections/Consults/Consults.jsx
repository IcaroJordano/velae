import Acordeon from "./Acordeon";


const Consults = () => {
    return (
        <section className="border  relative pt-28 lg:pt-13 lg:flex lg:ps-16  text-center border-t-1 border-neutral-800/20 mt-5 pb-4">
            <img className="lg:hidden scale-200 absolute top-8 w-24 lg:w-40 left-1/2 -translate-x-1/2" src="src/images/logo.jpg" alt="" />


            <div className="lg:flex gap-10 hidden  text-xs w-full text-start ">
                <div className="w-3/12      ">
                    <h5 className=" mb-10 ">AJUDA</h5>
                    <p className="mb-4 w-10/12 text-sm text-neutral-900/90  ">Lorem ipsum dolor sit labore perferendis consequatur voluptates, blanditiis ex nisi tempore aliquam nostrum</p>
                    <a className="flex my-7 text-sm" href="#">Perguntas Frequentes</a>
                    <a className="flex my-7 text-sm" href="#">Cuidados com o produto</a>
                    <a className="flex my-7 text-sm" href="#">Lojas</a>

                </div>
                <div className="w-2/12      ">
                    <h5 className="text-xs mb-9  ">SERVICOS</h5>
                    <a className="flex " href="#">Reparos</a>
                    <a className="flex my-5 text-sm" href="#">Personalizacao</a>
                    <a className="flex my-5 text-sm" href="#">Presentear</a>
                    <a className="flex my-5 text-sm" href="#">Baixe nosso App</a>

                </div>
                <div className="w-2/12      ">
                    <h5 className="text-xs mb-9  ">SOBRE NOS</h5>
                    <a className="flex " href="#">Reparos</a>
                    <a className="flex my-5 text-sm" href="#">desfile</a>
                    <a className="flex my-5 text-sm" href="#">Arte</a>
                    <a className="flex my-5 text-sm" href="#">A maison</a>
                    <a className="flex my-5 text-sm" href="#">Sustentabilidade</a>
                    <a className="flex my-5 text-sm" href="#">Noticias</a>
                    <a className="flex my-5 text-sm" href="#">Carreiras</a>

                </div>
                <div className="w-3/12      ">
                <h5 className="text-xs mb-10">Newsletter</h5>
                    <p className="mb-4 text-sm text-neutral-900/90  ">Inscreva-se para receber e-mails Louis Vuitton e receba as últimas notícias da Maison, incluindo pré-lançamentos exclusivos online e novas coleções.</p>
                    <a className="flex my-4 text-sm" href="#">Perguntas Frequentes</a>


                </div>
            </div>

            <div className="lg:hidden">
                <Acordeon title={'Ajuda'}>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur labore perferendis consequatur voluptates, blanditiis ex nisi tempore aliquam nostrum</p>
                    <a className="flex my-3" href="#">Perguntas Frequentes</a>
                    <a className="flex my-3" href="#">Cuidados com o produto</a>
                    <a className="flex my-3" href="#">Lojas</a>
                </Acordeon>
                <Acordeon title={'Servicos'}>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur labore perferendis consequatur voluptates, blanditiis ex nisi tempore aliquam nostrum</p>
                    <a className="flex my-3" href="#">Perguntas Frequentes</a>
                    <a className="flex my-3" href="#">Cuidados com o produto</a>
                    <a className="flex my-3" href="#">Lojas</a>
                </Acordeon>
                <Acordeon title={'Sobre a Velae'}>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur labore perferendis consequatur voluptates, blanditiis ex nisi tempore aliquam nostrum</p>
                    <a className="flex my-3" href="#">Perguntas Frequentes</a>
                    <a className="flex my-3" href="#">Cuidados com o produto</a>
                    <a className="flex my-3" href="#">Lojas</a>
                </Acordeon>
                <Acordeon title={'Lancamentos'}>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur labore perferendis consequatur voluptates, blanditiis ex nisi tempore aliquam nostrum</p>
                    <a className="flex my-3" href="#">Perguntas Frequentes</a>
                    <a className="flex my-3" href="#">Cuidados com o produto</a>
                    <a className="flex my-3" href="#">Lojas</a>
                </Acordeon>
            </div>

        </section>
    )
}

export default Consults