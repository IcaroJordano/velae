import { CiHeart } from "react-icons/ci";


const CardProduto = ({ image, price, title }) => {
    return (
        <a href="" className="w-40 h-64 relative lg:h-11/12 lg:w-80 text-sm">
            <img src={image} className="absolute lg:static h-10/12 lg:h-96 object-cover" alt="" />
            <i className="absolute text-2xl bg-neutral-50/30 p-0.5 rounded-full top-2 left-10/12 lg:top-3 -translate-x-4/12 lg:-translate-x-5/12  lg:left-11/12  ">
                <CiHeart />
            </i>
            <div className="relative lg:static top-54  ">
                <h5 className=" my-1 lg:font-mono lg:text-sm lg:mt-3 ">{title}</h5>
                <p className="font-light lg:tracking-widest  text-neutral-600 ">R$ {new Intl.NumberFormat('pt-br').format(price)},00</p>
            </div>
        </a>
    )
}

export default CardProduto