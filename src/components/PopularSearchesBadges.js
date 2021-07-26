import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BadgeCarousel from "../components/BadgeCarousel";
import { getPopularSearches } from "../slices/popularSearchesSlice";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { getRandomColor } from "../utils";

const PopularSearchesBadges = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { popularSearches, loading, error } = useSelector(
        (state) => state.popularSearches
    );

    useEffect(() => {
        dispatch(getPopularSearches());
    }, [dispatch]);

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

            <BadgeCarousel
                className="mt-4"
                chipInfoList={popularSearches.map((popularSearch, idx) => {
                    return {
                        id: idx,
                        title: popularSearch,
                        colorCode: getRandomColor(),
                        faIconName: "fas fa-search",
                        link: `search?query=${popularSearch}`,
                    };
                })}
            />
        </div>
    );
};

export default PopularSearchesBadges;
