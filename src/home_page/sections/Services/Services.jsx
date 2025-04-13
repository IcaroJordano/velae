import { useRef, useEffect, useState } from "react";
import CardService from "./CardService";

const Services = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollLeft = scrollElement.scrollLeft;
    const itemWidth = scrollElement.firstChild?.offsetWidth || 1;
    const currentIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="text-center ">
      <h3 className="text-2xl lg:text-3xl  font-mono">Serviços Velae</h3>
      <p className="my-5 font-light w-11/12 lg:w-4/12 lg:text-neutral-700 text-neutral-500 m-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sint
        nihil distinctio quia error labore. Ut 
      </p>

      <div className="w-full pt-5 ">
        <div
          ref={scrollRef}
          style={{'scrollbarWidth':'none'}}
          className="flex overflow-x-auto px-8 gap-x-4 lg:gap-x-10 scroll-smooth lg:justify-center  lg:w-full"
        >
          <CardService
            subTitle={"Contacte-nos"}
            title={"A arte de presentear"}
            image={"src/images/presentes.png"}
          />
          <CardService
            subTitle={"Explorar"}
            title={"Serviços"}
            image={"src/images/servicos.png"}
          />
          
          
        </div>
{/* Indicadores de slide */}
<div className="flex justify-center gap-2 my-4 lg:hidden">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={` h-2 rounded-full ${
                activeIndex === i ? "w-6 bg-neutral-800" : "w-2 bg-neutral-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
