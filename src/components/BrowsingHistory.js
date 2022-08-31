import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getBrowsedProducts } from "../slices/browsedProductsSlice";
import ProductList from "./ProductList";

const BrowsingHistory = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { browsedProducts, loading, error } = useSelector(
        (state) => state.browsedProducts
    );

    useEffect(() => {
        dispatch(getBrowsedProducts());
    }, [dispatch]);

    if (!error && !loading && !browsedProducts?.length) return <></>;

    return (
        <div className={className}>
            <h3>{t("browsingHistory")}</h3>

            <ProductList
                products={browsedProducts}
                error={error}
                showRetryButton
                onRetryButtonClick={() => dispatch(getBrowsedProducts())}
                loading={loading}
                loadingItemSize={6}
                className="mt-4"
            />
        </div>
    );
};

export default BrowsingHistory;
