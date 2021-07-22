import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import BadgeCarousel from "../components/BadgeCarousel";
import { getCategories } from "../slices/categorySlice";
import { useTranslation } from "react-i18next";

const HomeScreen = ({ match }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { categories, loading, error } = useSelector(
        (state) => state.categories
    );

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    if (loading) return <Spinner animation="border" />;

    if (error) return <h1>{error}</h1>;

    return (
        <>
            <h2>{t("categories")}</h2>
            <BadgeCarousel
                chipInfoList={categories.map((category) => {
                    return {
                        id: category.id,
                        title: category.name,
                        colorCode: category.colorCode,
                        faIconName: category.faIconName,
                    };
                })}
            />
        </>
    );
};

export default HomeScreen;
