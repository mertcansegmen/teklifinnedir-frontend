import { arrayOf, number, string, element, shape } from "prop-types";
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./BadgeCarousel.css";

const BadgeCarousel = ({ chipInfoList, before, after, className }) => {
    const carousel = useRef(null);

    const [mouseHovered, setMouseHovered] = useState(false);

    return (
        <div
            className={`carousel-outer-container ${className}`}
            onMouseEnter={setMouseHovered}
            onMouseLeave={() => setMouseHovered(false)}
        >
            {mouseHovered && (
                <Button
                    size="sm"
                    variant="secondary"
                    className="carousel-btn max-radius"
                    onClick={() => (carousel.current.scrollLeft -= 100)}
                >
                    <i className="fas fa-chevron-left"></i>
                </Button>
            )}

            {mouseHovered && (
                <Button
                    size="sm"
                    variant="secondary"
                    className="carousel-btn carousel-right-btn max-radius"
                    onClick={() => (carousel.current.scrollLeft += 100)}
                >
                    <i className="fas fa-chevron-right"></i>
                </Button>
            )}

            <div className="hr-scroll-area" ref={carousel}>
                {before}
                {chipInfoList.map((chipInfo) => (
                    <Link to={chipInfo.link} key={chipInfo.id} className="mx-2">
                        <Button
                            className="max-radius"
                            style={{
                                backgroundColor: chipInfo.colorCode,
                                borderColor: chipInfo.colorCode,
                            }}
                        >
                            <i className={chipInfo.faIconName}></i>{" "}
                            {chipInfo.title}
                        </Button>
                    </Link>
                ))}
                {after}
            </div>
        </div>
    );
};

BadgeCarousel.propTypes = {
    after: element,
    before: element,
    chipInfoList: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            color: string,
            riIconType: string,
            riIconName: string,
            link: string,
        }).isRequired
    ).isRequired,
};

export default BadgeCarousel;
