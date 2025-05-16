import CardCategory from "./CardCategory"

import bolca1 from '../../../images/categorys/category_1.jpg'
import bolca2 from '../../../images/categorys/category_2.jpg'
import bolca3 from '../../../images/categorys/category_3.jpg'
import bolca4 from '../../../images/categorys/category_4.jpg'
import bolca5 from '../../../images/categorys/category_5.jpg'
import bolca6 from '../../../images/categorys/category_6.jpg'
import bolca7 from '../../../images/categorys/category_7.jpg'
import bolca8 from '../../../images/categorys/category_8.jpg'

const Categorys = () => {

    const categorys = [
        { title: 'Bolcas Femininas', image: bolca3 },
        { title: 'Bolcas Femininas', image: bolca2 },
        { title: 'Bolcas Femininas', image: bolca4 },
        { title: 'Bolcas Femininas', image: bolca5 },
        { title: 'Bolcas Femininas', image: bolca8 },
        { title: 'Bolcas Femininas', image: bolca7 },
        { title: 'Bolcas Femininas', image: bolca1 },
        { title: 'Bolcas Femininas', image: bolca6 },
    ]

    return (
        <section className="w-full lg:pt-5  ">
            <h3 className="text-2xl lg:text-3xl w-10/12 mx-auto  text-center my-5  mt-3 lg:mt-15">Explore a Selecao Exclusiva da Valae</h3>
            <div className="flex flex-wrap pt-5 px-3 gap-y-5 lg:  lg:px-10 justify-around">
                {categorys.map((category,index) => (
                    <CardCategory key={index} link={'https://br.louisvuitton.com/por-br/homepage'} title={category.title} image={category.image} ></CardCategory>
                ))}
            </div>
        </section>
    )
}
export default Categorys