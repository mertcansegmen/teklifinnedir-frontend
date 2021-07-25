import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ products, className }) => {
    return (
        <Row className={className}>
            {products?.map((product) => (
                <Col key={product.id} xs={6} md={4} lg={3} xl={2}>
                    <ProductCard key={product.id} product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
