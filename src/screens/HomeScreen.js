import React from "react";
import BrowsingHistory from "../components/BrowsingHistory";
import CategoryBadges from "../components/CategoryBadges";
import FeaturedProducts from "../components/FeaturedProducts";
import PopularSearchesBadges from "../components/PopularSearchesBadges";

const HomeScreen = ({ match }) => {
    return (
        <>
            <CategoryBadges className="mt-4" />

            <PopularSearchesBadges className="mt-5" />

            <FeaturedProducts className="mt-5" />

            <BrowsingHistory className="mt-5" />
        </>
    );
};

export default HomeScreen;
