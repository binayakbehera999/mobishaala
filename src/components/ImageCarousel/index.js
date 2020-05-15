import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

import "./style.css"

const items = [
    {
        src: 'https://mobishaala-assets.s3.amazonaws.com/media/institute/b9db5b60-24e9-43f9-91cb-e30b1beca00a/banner/image1571241994037.png',

    },
    {
        src: 'https://mobishaala-assets.s3.amazonaws.com/media/institute/b9db5b60-24e9-43f9-91cb-e30b1beca00a/banner/image1571241994037.png',
    },
    {
        src: 'https://mobishaala-assets.s3.amazonaws.com/media/institute/b9db5b60-24e9-43f9-91cb-e30b1beca00a/banner/image1571241994037.png',
    }
];

const ImageCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className="row image-container">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6" style={{ paddingRight: 25 }}>
                        <img src={item.src} className="image" alt="Error" />
                    </div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default ImageCarousel;
