import Categorys from "./sections/Categorys/Categorys"
import Header from "./sections/Header/Header"
import Home from "./sections/Home/Home"
import Services from "./sections/Services/Services"
import Consults from "./sections/Consults/Consults"
import ProductsOne from "./sections/ProductsOne/ProductsOne"
import Footer from "./sections/Footer/Footer"
import Search from "./sections/Search/Search"

const HomePage = () => {
    const produtos = [
        { title: "Lunaria di Notte Firenze ", price: '2530', image: 'src/images/produtos/bolca_1.jpg' },
        { title: "Bolca Marrom", price: '2080', image: 'src/images/produtos/bolca_6.jpg' },
        { title: "Bolca Verde", price: '2390', image: 'src/images/produtos/bolca_3.jpg' },
        { title: "Bolca Branca", price: '2090', image: 'src/images/produtos/bolca_4.jpg' },
    ]
    const produtosTwo = [
        { title: "Bolca Verde", price: '2530', image: 'src/images/produtos/bolca_2.jpg' },
        { title: "Bolca Azul", price: '2080', image: 'src/images/produtos/bolca_7.jpg' },
        { title: "Bolca Preta", price: '2390', image: 'src/images/produtos/bolca_5.jpg' },
        { title: "Bolca Laranja", price: '2090', image: 'src/images/produtos/bolca_8.jpg' },
    ]
    return (
        <div className="h-screen">
            <Header />
            <Search/>
            <Home />
            <Categorys />
            <ProductsOne image={'src/images/productsOne.jpg'} title={'Bolcas sociais'} products={produtos} />
            <ProductsOne image={'src/images/productsTwo.jpg'} title={'Bolcas de escritorio'} products={produtosTwo} />
            <Services/>
            <Consults/>
            <Footer/>
        </div>
    )
}
export default HomePage