import React, { useState } from "react";
import ContentLoader from "react-content-loader";

const BadgeSL = (props) => {
    const [width] = useState(getRandomBadgeWidth(90, 140));

    function getRandomBadgeWidth(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <ContentLoader width={width} height={34} {...props}>
            <rect x="0" y="0" rx="16" ry="16" width={width} height="34" />
        </ContentLoader>
    );
};

export default BadgeSL;
