import Image from 'next/image'
import slide1 from '../asset/images/carousel-slides-1.png'
import slide2 from '../asset/images/carousel-slides.png'
var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;

export default function DemoCarousel() {
        return (
            <Carousel showArrows={true}>
                <div>
                <Image src={slide1}/>
                </div>
                <div>
                <Image src={slide2}/>
                </div>
                <div>
                <Image src={slide1}/>
                </div>

            </Carousel>
        );
    }

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls