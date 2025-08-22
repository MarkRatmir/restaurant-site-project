import React, { useState, useEffect } from 'react';
import '../styles/ImageCarousel.css';

const ImageCarousel = ({ images, interval = 8000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            {images.map((img, index) => (
                <div
                    className={`slide ${index === currentIndex ? "active" : ""}`}
                    key={index}
                >
                    <img src={img} alt={`Slide ${index}`} />
                </div>
            ))}

            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;

//<div className="menu-preview-items">
 //                       <div className="menu-preview-item"><img src="https://www.thespruceeats.com/thmb/H0YjdoMIhz0VqvbQskQYq3VWnqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg" alt="Dish 1" /></div>
  //                      <div className="menu-preview-item"><img src="https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg" alt="Dish 2" /></div>
  //                      <div className="menu-preview-item"><img src="https://media.istockphoto.com/id/911978890/photo/delicious-gourmet-rack-of-lamb-recipe.jpg?s=612x612&w=0&k=20&c=gkkQOmv7DKrX4zQ_PFcR-M1CtdvMiwBjSNj3QnZlc70=" alt="Dish 3"/></div>
    //                </div>