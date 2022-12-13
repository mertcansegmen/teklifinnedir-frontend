import React from "react";
import ContentLoader from "react-content-loader";

const ImageCarouselSL = ({ className, ...props }) => {
    return (
        <ContentLoader width={"100%"} height={650} {...props}>
            <rect x="0" y="0" rx="16" ry="16" width="100%" height="526" />
            <rect x="0" y="540" rx="16" ry="16" width="100" height="100" />
            <rect x="0" y="540" rx="16" ry="16" width="100" height="100" />
            <rect x="110" y="540" rx="16" ry="16" width="100" height="100" />
            <rect x="220" y="540" rx="16" ry="16" width="100" height="100" />
            <rect x="330" y="540" rx="16" ry="16" width="100" height="100" />
        </ContentLoader>
    );
};

export default ImageCarouselSL;
