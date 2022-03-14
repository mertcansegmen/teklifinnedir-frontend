import React, { useEffect, useState } from "react";
import ComponentCarousel from "./ComponentCarousel";

import "./ImageCarousel.css";

const ImageCarousel = ({
    images,
    className,
    subImageWidth,
    subImageHeight,
    onImageClick,
}) => {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        images?.length && setCurrentImage(images[0]);
    }, [images]);

    return (
        <div className={className}>
            <div
                className="ratio ratio-1x1"
                onClick={() => onImageClick && onImageClick(currentImage)}
            >
                <img
                    className="carousel-image hover-pointer"
                    src={currentImage}
                    alt={"product"}
                />
            </div>

            <ComponentCarousel
                className={"mt-3"}
                data={images}
                renderItem={(image, idx) => (
                    <div
                        key={idx}
                        className={`carousel-bottom-container ratio ratio-1x1 me-2 ${
                            currentImage === image &&
                            "border border-pri border-3"
                        }`}
                        onClick={() => setCurrentImage(image)}
                        style={{
                            width: subImageWidth,
                            height: subImageHeight,
                        }}
                    >
                        <img
                            className="carousel-image hover-pointer"
                            src={image}
                            alt={"product"}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default ImageCarousel;
