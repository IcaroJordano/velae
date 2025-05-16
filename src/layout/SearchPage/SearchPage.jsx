import { BiX } from "react-icons/bi";
import logo from "../../images/logo.jpg";
import image from "../../images/produtos/bolca_1.jpg";
import Search from "../../home_page/sections/Search/Search";
import CardProduto from "../../home_page/sections/ProductsOne/CardProduto";
import { CiHeart } from "react-icons/ci";

const SearchPage = ({ isOpen, setIsOpen }) => {
  return (
    <section
      className={`${
        isOpen ? "h-screen pb-40" : "h-0  overflow-hidden"
      } transition-all duration-800 fixed overflow-scroll z-50 w-full bg-white `}
    >
      <header className="mt-2">
        <div className=" overflow-hidden  left-1/2  h-13 lg:h-20 -translate-x-1/2 lg:-translate-x-3/12 absolute w-32 lg:w-64 ">
          <img
            className="scale-200 lg:mt-2  w-32 pb-4 lg:w-40 "
            src={logo}
            alt=""
          />
        </div>
        <button>
          <BiX
            className={`fixed bg-white rounded-full text-2xl right-3 top-4 ${isOpen?'z-50':'h-0'} `}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </button>
      </header>

      <div className="mt-8">
        <Search />
      </div>

      <div className="border-b border-neutral-300 py-10 ps-6 ">
        <h2 className="text-xs font-light mb-4">PESQUISAS EM ALTA</h2>
        <div>
          <div className="flex gap-4 text-sm text-neutral-600 underline">
            <span>office</span>
            <span>street</span>
            <span>masculina</span>
            <span>feminina</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="ps-8 mt-8 mb-4 font-light text-base">Mais Vendidos</h3>
        <div className=" overflow-scroll">
          <div className="flex  h-auto justify-between  mt-4 flex-wrap text-base">
            <div className="w-1/2 ">
              <img
                src={image}
                className="bg-neutral-800 flex object-cover h-48"
              />
              <p className="ps-2" >aaa</p>
              <p className="ps-2" >aaa</p>
            </div>
            <div className="w-1/2 ">
              <img
                src={image}
                className="bg-neutral-800 flex object-cover h-48"
              />
              <p className="ps-2" >aaa</p>
              <p className="ps-2" >aaa</p>
            </div>
            <div className="w-1/2 ">
              <img
                src={image}
                className="bg-neutral-800 flex object-cover h-48"
              />
              <p className="ps-2" >aaa</p>
              <p className="ps-2" >aaa</p>
            </div>
            <div className="w-1/2 ">
              <img
                src={image}
                className="bg-neutral-800 flex object-cover h-48"
              />
              <p className="ps-2" >aaa</p>
              <p className="ps-2" >aaa</p>
            </div>
            <div className="w-1/2 ">
              <img
                src={image}
                className="bg-neutral-800 flex object-cover h-48"
              />
              <p className="ps-2" >aaa</p>
              <p className="ps-2" >aaa</p>
            </div>
            <div className="w-1/2 ">
              <img
                src={image}
                className="bg-neutral-800 flex object-cover h-48"
              />
              <p className="ps-2" >aaa</p>
              <p className="ps-2" >aaa</p>
            </div>
          </div>
        </div>

        <p className="w-8/12 ms-4 mt-8 text-xs">Entre em Contato com o Client Services +55 (11) 3060-5099</p>
        <p className="w-8/12 ms-4 mt-4 text-sm">FAQs | SAQ</p>
      </div>
    </section>
  );
};

export default SearchPage;
