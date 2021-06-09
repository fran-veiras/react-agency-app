import React, {useState} from 'react'
import { SliderData, Container, Imagenes, ArrowRight, ArrowLeft } from './PortadaComponentStyle';
import { Title } from './Title';

export const PortadaComponent = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        clearInterval(Carrousel)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        clearInterval(Carrousel)
    }

    const Carrousel = setInterval(function() { if(prevSlide() === false) {nextSlide()} }, 5000);


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
       <Container id="home">
           <ArrowLeft onClick={prevSlide}/>
           <ArrowRight onClick={nextSlide}/>
           <Title />
        {SliderData.map( (slide, index)=> {
            return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                        <>
                        <Imagenes src={slide.image} alt="football image" />
                        </>
                    )}
                </div>
            )
        })}
       </Container>
    )
}
