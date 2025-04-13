import CardCategory from "./CardCategory"

const Categorys = () => {

    const categorys = [
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_3.jpg' },
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_2.jpg' },
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_4.jpg' },
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_5.jpg' },

        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_8.jpg' },
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_7.jpg' },
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_1.jpg' },
        { title: 'Bolcas Femininas', image: 'src/images/categorys/category_6.jpg' },
    ]

    return (
        <section className="w-full lg:pt-5  ">
            <h3 className="text-2xl lg:text-3xl w-10/12 mx-auto  text-center my-5  mt-10 lg:mt-15">Explore a Selecao Exclusiva da Valae</h3>
            <div className="flex flex-wrap pt-5 px-3 gap-y-5 lg:  lg:px-10 justify-around">
                {categorys.map((category) => (
                    <CardCategory link={'https://br.louisvuitton.com/por-br/homepage'} title={category.title} image={category.image} ></CardCategory>
                ))}
            </div>
        </section>
    )
}
export default Categorys