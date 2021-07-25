import "./ProductCard.css";
import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCard = ({ product, onFavoriteButtonClick, className }) => {
    return (
        <Card className={`position-relative product-card mb-3 ${className}`}>
            {/* Product Image */}
            <div className="ratio ratio-1x1">
                <LinkContainer to={`/product/${product?.id}`}>
                    <Card.Img
                        className="product-image hover-pointer"
                        variant="top"
                        src={product?.thumbnail}
                    />
                </LinkContainer>
            </div>
            <Card.Body>
                {/* Product Name */}
                <LinkContainer
                    to={`/product/${product?.id}`}
                    className="hover-pointer"
                >
                    <span className="fw-700 ellipsis-1">
                        <small>{product?.name}</small>
                    </span>
                </LinkContainer>

                {/* Product Location */}
                <span className="text-muted d-block">
                    <small>
                        <small>{product?.location}</small>
                    </small>
                </span>

                {/* Product Category */}
                <LinkContainer
                    to={`/search?category=${product?.category?.id}`}
                    className="hover-pointer"
                >
                    <span>
                        <small>
                            <small>{product?.category?.name}</small>
                        </small>
                    </span>
                </LinkContainer>
            </Card.Body>

            {/* Product Type Badge */}
            <h6 className="position-absolute product-card-type-badge">
                <span className="badge text-pri bg-light rounded-pill">
                    {product?.type?.toUpperCase()}
                </span>
            </h6>

            {/* Favorite Button */}
            {product?.favorite ? (
                <i
                    className="fas fa-heart position-absolute fa-lg hover-pointer product-card-favorite-icon product-card-favorite-icon-toggled"
                    onClick={() =>
                        onFavoriteButtonClick &&
                        onFavoriteButtonClick(product?.id)
                    }
                ></i>
            ) : (
                <i
                    className="far fa-heart position-absolute fa-lg hover-pointer product-card-favorite-icon "
                    onClick={() =>
                        onFavoriteButtonClick &&
                        onFavoriteButtonClick(product?.id)
                    }
                ></i>
            )}

            {/* Price */}
            <h6
                className="position-absolute"
                style={{ bottom: "10px", right: "10px" }}
            >
                <span className="text-pri">{`${product?.price} ${product?.currency}`}</span>
            </h6>
        </Card>
    );
};

export default ProductCard;
