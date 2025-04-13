
const Home = () => {
    
    return (
        <section className="pt-3  lg:pt-10 lg:h-screen lg:overflow-hidden  h-7/12   w-full ">
            <img className="absolute w-full overflow-hidden h-8/12 object-cover  lg:object-top   lg:h-11/12  "  src="src/images/bg_home.jpg" alt="" />
            <div className="mx-auto text-center  text-neutral-50  w-3/4 left-1/2 -translate-x-1/2 h-36  top-7/12 lg:top-9/12 absolute  ">
                <h2 className="font-extralight tracking-widest text-sm">Lancamento</h2>
                <h3 className="text-3xl my-3 ">Colecao Feminina Noutical</h3>
                <h4 className=" underline text-sm lg:text-base mt-4" ><a href="">Descubra a Colecao</a></h4>

            </div>
        </section>
    )
}
export default Home