import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts } from "../slices/featuredProductsSlice";
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

    return (
        <div className={className}>
            <h3>{t("featuredProducts")}</h3>

            <ProductList
                products={featuredProducts}
                error={error}
                showRetryButton
                onRetryButtonClick={() => dispatch(getFeaturedProducts())}
                loading={loading}
                loadingItemSize={12}
                className="mt-4"
            />
        </div>
    );
};

export default FeaturedProducts;
