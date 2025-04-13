import { TiThListOutline } from "react-icons/ti"
import CardProduto from "./CardProduto"

const ProductsOne = ({ image, title, products }) => {



    return (
        <section className="">
            <div className="flex">
                <img className="h-96 object-cover    lg:h-screen lg:w-full  " src={image} alt="" />
            </div>
            <h3 className="text-2xl text-center  tracking-widest my-5 font-light underline underline-offset-8 mt-10">{title}</h3>
            <div className="flex lg:h-full flex-wrap pt-5 px-3 gap-y-10 lg:  lg:px-10 justify-around">
                {products.map((produto) => (
                    <CardProduto image={produto.image} title={produto.title} price={produto.price} />))}
            </div>
            <div className="py-22 text-center mb-20">
                <a className="border-1 w-6/12 px-10  py-4 text-sm font-sans rounded-4xl" href="">Conheca a Colecao</a>

            </div>
        </section>
    )
}

export default ProductsOne