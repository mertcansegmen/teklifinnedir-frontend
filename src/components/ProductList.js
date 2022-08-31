import React from "react";
import { Col, Row } from "react-bootstrap";
import ResultError from "./Errors/ResultError";
import ProductCard from "./ProductCard";
import ProductListSL from "./SkeletonLoaders/ProductListSL";

const ProductList = ({
    products,
    loading,
    loadingItemSize = 6,
    error,
    showRetryButton,
    onRetryButtonClick,
    emptyMessage,
    ...props
}) => {
    if (!showRetryButton && onRetryButtonClick) {
        throw new Error(
            "showRetryButton must be true if onRetryButtonClick is defined."
        );
    }

    if (error) {
        return (
            <ResultError
                title={error}
                showRetryButton={showRetryButton}
                onRetryButtonClick={onRetryButtonClick}
                {...props}
            />
        );
    }

    if (loading) {
        return <ProductListSL itemSize={loadingItemSize} {...props} />;
    }

    if (emptyMessage && !products?.length) {
        return <p className="text-center mt-4">{emptyMessage}</p>;
    }

    return (
        <Row {...props}>
            {products?.map((product) => (
                <Col key={product.id} xs={6} md={4} lg={3} xl={2}>
                    <ProductCard key={product.id} product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
