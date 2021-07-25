import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BadgeCarousel from "../components/BadgeCarousel";
import { getCategories } from "../slices/categorySlice";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { getRandomColor } from "../utils";

const CategoryBadges = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { categories, loading, error } = useSelector(
        (state) => state.categories
    );

    useEffect(() => {
        dispatch(getCategories());
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
            <h3>{t("categories")}</h3>

            <BadgeCarousel
                className="mt-4"
                chipInfoList={categories.map((category) => {
                    return {
                        id: category.id,
                        title: category.name,
                        colorCode: getRandomColor(),
                        faIconName: category.faIconName,
                        link: `search?category=${category.id}`,
                    };
                })}
            />
        </div>
    );
};

export default CategoryBadges;
