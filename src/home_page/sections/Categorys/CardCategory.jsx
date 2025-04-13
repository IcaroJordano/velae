const CardCategory = ({image,title,link}) => {
    return (
        <a  target="blanck"href={link} className="w-5/12 h-64 lg:h-11/12 lg:w-80">
            <img className="h-9/12 lg:h-96 object-cover" src={image} alt="" />
            <p className="text-center text-sm  tracking-wider my-3">{title}</p>
        </a>
    )
}
export default CardCategory