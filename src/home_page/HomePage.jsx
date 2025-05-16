import Categorys from "./sections/Categorys/Categorys";
import Header from "./sections/Header/Header";
import Home from "./sections/Home/Home";
import Services from "./sections/Services/Services";
import Consults from "./sections/Consults/Consults";
import ProductsOne from "./sections/ProductsOne/ProductsOne";
import Footer from "./sections/Footer/Footer";
import Search from "./sections/Search/Search";

import bolca1 from "../images/produtos/bolca_1.jpg";
import bolca2 from "../images/produtos/bolca_2.jpg";
import bolca3 from "../images/produtos/bolca_3.jpg";
import bolca4 from "../images/produtos/bolca_4.jpg";
import bolca5 from "../images/produtos/bolca_5.jpg";
import bolca6 from "../images/produtos/bolca_6.jpg";
import bolca7 from "../images/produtos/bolca_7.jpg";
import bolca8 from "../images/produtos/bolca_8.jpg";

import productsOne from "../images/productsOne.jpg";
import productsTwo from "../images/productsTwo.jpg";
import SearchPage from "../layout/SearchPage/SearchPage";
import { useState } from "react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const produtos = [
    { title: "Lunaria di Notte Firenze ", price: "2530", image: bolca1 },
    { title: "Bolca Marrom", price: "2080", image: bolca6 },
    { title: "Bolca Verde", price: "2390", image: bolca3 },
    { title: "Bolca Branca", price: "2090", image: bolca4 },
  ];
  const produtosTwo = [
    { title: "Bolca Verde", price: "2530", image: bolca2 },
    { title: "Bolca Azul", price: "2080", image: bolca7 },
    { title: "Bolca Preta", price: "2390", image: bolca5 },
    { title: "Bolca Laranja", price: "2090", image: bolca8 },
  ];
  return (
    <div className="h-screen z-40">
      <SearchPage isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        className="pt-14 mb-0.5"
        onClick={() => {
          setIsOpen(true);
          console.log(true);
        }}
      >
        <Search
        />
      </div>
      <Home />
      <Categorys />
      <ProductsOne
        image={productsOne}
        title={"Bolcas sociais"}
        products={produtos}
      />
      <ProductsOne
        image={productsTwo}
        title={"Bolcas de escritorio"}
        products={produtosTwo}
      />
      <Services />
      <Consults />
      <Footer />
    </div>
  );
};
export default HomePage;
