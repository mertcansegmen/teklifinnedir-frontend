import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { getPopularSearches } from "../slices/popularSearchesSlice";
import Loader from "./Loader";
import { getRandomColor } from "../utils";
import ComponentCarousel from "./ComponentCarousel";

const PopularSearchesBadges = ({ className }) => {
    const { t } = useTranslation();

    const [badgeColors, setBadgeColors] = useState([]);

    const dispatch = useDispatch();

    const { popularSearches, loading, error } = useSelector(
        (state) => state.popularSearches
    );

    useEffect(() => {
        dispatch(getPopularSearches());
    }, [dispatch]);

    useEffect(() => {
        setBadgeColors([]);
        for (let i = 0; i < popularSearches.length; i++) {
            setBadgeColors((badgeColors) => [...badgeColors, getRandomColor()]);
        }
    }, [popularSearches]);

    if (loading)
        return (
            <div className={className}>
                <Loader />
            </div>
        );

    if (error)
        return (
            <div className={className}>
                <h1>{error}</h1>
            </div>
        );

    return (
        <div className={className}>
            <h3>{t("popularSearches")}</h3>

            <ComponentCarousel
                data={popularSearches}
                renderItem={(popularSearch, index) => (
                    <Link
                        to={`search?query=${popularSearch}`}
                        key={index}
                        className="mx-2"
                    >
                        <Button
                            className="max-radius"
                            style={{
                                backgroundColor: badgeColors[index],
                                borderColor: badgeColors[index],
                            }}
                        >
                            <i className="fas fa-search"></i> {popularSearch}
                        </Button>
                    </Link>
                )}
            />
        </div>
    );
};

export default PopularSearchesBadges;
