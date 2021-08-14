import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../slices/categorySlice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import Loader from "./Loader";
import ComponentCarousel from "./ComponentCarousel";

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

            <ComponentCarousel
                data={categories}
                renderItem={(category) => (
                    <Link
                        to={`search?category=${category.id}`}
                        key={category.id}
                        className="mx-2"
                    >
                        <Button
                            className="max-radius"
                            style={{
                                backgroundColor: category.colorCode,
                                borderColor: category.colorCode,
                            }}
                        >
                            <i className={category.faIconName}></i>{" "}
                            {category.name}
                        </Button>
                    </Link>
                )}
            />
        </div>
    );
};

export default CategoryBadges;
