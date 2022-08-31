import React from "react";
import BadgeSL from "./BadgeSL";
import ComponentCarousel from "../ComponentCarousel";

const BadgeCarouselSL = (props) => {
    return (
        <ComponentCarousel
            data={[...Array(15)]}
            renderItem={(_, i) => <BadgeSL key={i} className="me-4" />}
            {...props}
        ></ComponentCarousel>
    );
};

export default BadgeCarouselSL;
