import useEmblaCarousel from "embla-carousel-react";
import '../styles/carrusel.css'
import Autoplay from "embla-carousel-autoplay";

export default function Carrusel() {
    const [emblaRef]=useEmblaCarousel({loop: true, axis: "y"}, [Autoplay({delay: 4000})])

    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img style={{
              width: "100%",
              
            }}
              src="/pexels-abdurrahim-israfilov-537700999-32802769.jpg"
              alt="photo"
            />
          </div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    );

}