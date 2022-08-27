import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";

import "./ComponentCarousel.css";

const ComponentCarousel = ({ renderItem, data, before, after, className }) => {
    const carousel = useRef(null);

    const [mouseHovered, setMouseHovered] = useState(false);

    return (
        <div
            className={`carousel-outer-container ${className}`}
            onMouseEnter={setMouseHovered}
            onMouseLeave={() => setMouseHovered(false)}
        >
            {mouseHovered && (
                <>
                    <Button
                        size="sm"
                        variant="secondary"
                        className="carousel-btn max-radius"
                        onClick={() => (carousel.current.scrollLeft -= 100)}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </Button>

                    <Button
                        size="sm"
                        variant="secondary"
                        className="carousel-btn carousel-right-btn max-radius"
                        onClick={() => (carousel.current.scrollLeft += 100)}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </Button>
                </>
            )}

            <div className="hr-scroll-area" ref={carousel}>
                {before}
                {data?.map(
                    (item, index) => renderItem && renderItem(item, index)
                )}
                {after}
            </div>
        </div>
    );
};

export default ComponentCarousel;
