import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import ImageCarouselSL from "./ImageCarouselSL";
import ListingDetailsSL from "./ListingDetailsSL";

const ProductScreenSL = () => {
    return (
        <div className="mt-5">
            <Row>
                <Col lg={5} className="mb-3">
                    <ImageCarouselSL />
                </Col>

                <Col lg={7} className="d-flex flex-column">
                    <ListingDetailsSL />
                </Col>
            </Row>
        </div>
    );
};

export default ProductScreenSL;
