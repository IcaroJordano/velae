const CardService =({image,title,link, subTitle})=>{
    return(
        <div className="min-w-11/12 lg:min-w-[100px] lg:w-4/12 lg:h-[500px]  overflow-hidden   ">
            <div className=""></div>
            <img className="w-screen lg:w-full min-h-64  lg:min-h-96 object-cover me-15" src={image} alt="" />
            <p className="my-4 font-mono text-lg font-light ">{title}</p>
            <p className="my-4 font-mono text-sm lg:text-base font-light  underline underline-offset-1" >{subTitle}</p>
        </div>
    )
}

export default CardService