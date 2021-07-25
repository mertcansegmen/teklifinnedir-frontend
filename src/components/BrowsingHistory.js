import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getBrowsedProducts } from "../slices/browsedProductsSlice";
import Loader from "./Loader";
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

    if (!browsedProducts?.length) return <></>;

    return (
        <div className={className}>
            <h3>{t("browsingHistory")}</h3>

            <ProductList products={browsedProducts} className="mt-4" />
        </div>
    );
};

export default BrowsingHistory;
