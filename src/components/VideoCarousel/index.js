import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    Button
} from 'reactstrap';
import "./style.css"

const items = [
    {
        src: 'https://mobishaala-assets.s3.amazonaws.com/media/institute/b9db5b60-24e9-43f9-91cb-e30b1beca00a/banner/image1571241994037.png',
        videoTitle: 'हिंदी साहित्य (Optional)',
        videoCaption: 'BPSC 65 Mains',
        desc: "Kumar Sarvesh sir's lecture on Ram Ki Shakti Pooja, हिंदी साहित्य (Optional) for BPSC 65 Mains"
    },
    {
        src: 'https://mobishaala-assets.s3.amazonaws.com/media/institute/b9db5b60-24e9-43f9-91cb-e30b1beca00a/banner/image1571241994037.png',
        videoTitle: 'हिंदी साहित्य (Optional)',
        videoCaption: 'BPSC 65 Mains',
        desc: "Kumar Sarvesh sir's lecture on Ram Ki Shakti Pooja, हिंदी साहित्य (Optional) for BPSC 65 Mains"
    },
    {
        src: 'https://mobishaala-assets.s3.amazonaws.com/media/institute/b9db5b60-24e9-43f9-91cb-e30b1beca00a/banner/image1571241994037.png',
        videoTitle: 'हिंदी साहित्य (Optional)',
        videoCaption: 'BPSC 65 Mains',
        desc: "Kumar Sarvesh sir's lecture on Ram Ki Shakti Pooja, हिंदी साहित्य (Optional) for BPSC 65 Mains"
    }
];

const VideoCarousel = (props) => {
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
                <div className="row video-container">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3 video-description">
                        <h2 className="video-title">{item.videoTitle}</h2>

                        <h3 className="video-caption">{item.videoCaption}</h3>
                        <div className="desc">{item.desc}</div>
                        <Button className="carousel-button">JOIN CLASSES</Button>

                    </div>
                    <div className="col-lg-4" style={{ paddingRight: 25 }}>
                        <img src={item.src} className="video" alt={item.altText} />
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

        </Carousel>
    );
}

export default VideoCarousel;
