import { useEffect, useState } from "react";
import logo from '../../../images/logo.jpg'

import { CiMenuBurger, CiUser, CiSearch, CiHeart} from "react-icons/ci";
import Menu from "./Menu";
import SearchPage from "../../../layout/SearchPage/SearchPage";


const Header = ({isOpen, setIsOpen}) => {
    const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(50< window.scrollY && window.scrollY !== 0 );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
        setIsTop(50< window.scrollY && window.scrollY !== 0 );
      },[]
  )

    return (
        <header className={`w-full  fixed flex text-2xl z-50 top-0 h-14 lg:h-24 bg-white ${isTop?'border-b-1':'border-'}  border-neutral-500/30 
        justify-between`}>

            <div className="flex my-auto font-mono ps-2 lg:ps-8 lg:text-sm items-end z-30">
                <Menu/>
                <button className="cursor-pointer flex items"
                  onClick={ ()=>{
                    setIsOpen(true)
                    console.log(true)
                  }}
                >

                    <CiSearch className={` ${isTop?"h-6 ":"h-0 lg:h-6"}  transition-all duration-300 lg:text-xl  ms-1 my-auto`} />
                    <span className="ms-3   justify-baseline items-end hidden pt-2 lg:flex">Buscar</span>
                </button>
            </div>
            <div className=" overflow-hidden  left-1/2  h-13 lg:h-20 -translate-x-1/2 lg:-translate-x-3/12 absolute w-32 lg:w-64 ">
                 <img className="scale-200 lg:mt-2  w-32 pb-4 lg:w-40 " src={logo} alt="" />
            </div>
            <div className="flex items-end me-3 lg:me-10">
                <span className="cursor-pointer hidden lg:flex text-sm font-mono pt-1 m-3 my-auto">Fale Conosco</span>
        <CiHeart className="hidden lg:flex cursor-pointer  me-3 my-auto"/>
            <CiUser className="  my-auto cursor-pointer" />
            </div>
            <SearchPage isOpen={isOpen} setIsOpen={setIsOpen}  />
        </header>
    )
}
export default Header