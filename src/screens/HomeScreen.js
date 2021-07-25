import React from "react";
import CategoryBadges from "../components/CategoryBadges";
import FeaturedProducts from "../components/FeaturedProducts";

const HomeScreen = ({ match }) => {
    return (
        <>
            <CategoryBadges className="mt-4" />

            <FeaturedProducts className="mt-5" />
        </>
    );
};

export default HomeScreen;
