import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCardSL from "./ProductCardSL";

const ProductListSL = ({ itemSize = 6, ...props }) => {
    return (
        <Row {...props}>
            {[...Array(itemSize)].map((_, i) => (
                <Col key={i} xs={6} md={4} lg={3} xl={2}>
                    <ProductCardSL className="mb-3" />
                </Col>
            ))}
        </Row>
    );
};

export default ProductListSL;
