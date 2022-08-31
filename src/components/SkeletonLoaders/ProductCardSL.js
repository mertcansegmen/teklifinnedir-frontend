import React from "react";
import ContentLoader from "react-content-loader";

const ProductCardSL = (props) => {
    return (
        <ContentLoader width={200} height={300} {...props}>
            <rect x="0" y="0" rx="24" ry="24" width="200" height="300" />
        </ContentLoader>
    );
};

export default ProductCardSL;
