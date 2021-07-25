import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts } from "../slices/featuredProductsSlice";
import Loader from "./Loader";
import ProductList from "./ProductList";

const FeaturedProducts = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { featuredProducts, loading, error } = useSelector(
        (state) => state.featuredProducts
    );

    useEffect(() => {
        dispatch(getFeaturedProducts());
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
            <h3>{t("featuredProducts")}</h3>

            <ProductList products={featuredProducts} className="mt-4" />
        </div>
    );
};

export default FeaturedProducts;
