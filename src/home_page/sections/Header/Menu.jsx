import { useState } from "react"
import { CiMenuBurger, CiUser, CiSearch, CiHeart} from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Menu =()=>{
    const [isOpen, setIsOpen] =useState(false)
    return(
        <>
        
        <div>
            <button className="cursor-pointer flex items-end " onClick={()=>{setIsOpen(!isOpen)}} >
                    {isOpen?(
                        <IoClose className=" z-50 lg:text-xl mx-2 lg:mx3  my-auto" />

                    ):(
                        <CiMenuBurger className="z-50 lg:text-xl mx-2 lg:mx3  my-auto" />
                    )}
                    <span className="me-5 ms-2 hidden lg:flex">Menu</span>
                </button>
        </div>

        <div className={`absolute lg:h-screen   w-full lg:w-0 ${isOpen?"h-screen  lg:w-4/12":'h-0 bg-transparent text-transparent w-0 overflow-hidden '} transition-all duration-600 bg-white top-14 z-40  left-0   `}>
        <div className="p-6  pt-10 flex flex-col text-[18px] gap-8 lg:pt-15">
        <a className="flex  justify-between" href=""> Presentes e Personalização
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href="">Novidades 
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href="">Bolsas e Carteiras
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href="">Mulher 
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href=""> Homem
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href=""> Joias
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href="">Relógios 
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href=""> Perfumes
            <FaAngleRight/></a> 
        <a className="flex  justify-between" href=""> Baús, Viagens e Casa
            <FaAngleRight/>
        </a>
        <a className="flex  justify-between" href="">Serviços 
            <FaAngleRight/></a> 
        </div>
        </div>
        </>
    )
}

export default Menu