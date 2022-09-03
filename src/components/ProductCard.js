import "./ProductCard.css";
import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";
import FavouriteButton from "./FavouriteButton";

const ProductCard = ({ product, onFavoriteButtonClick, className, style }) => {
    const { t } = useTranslation();

    const disabled = product?.sold || product?.removed;

    return (
        <Card
            className={`position-relative product-card mb-3 ${className}`}
            style={style}
        >
            {/* Product Image */}
            <div className="ratio ratio-1x1">
                <LinkContainer
                    to={`/product/${product?.id}`}
                    onClick={(e) => disabled && e.preventDefault()}
                >
                    <Card.Img
                        className={`product-image ${
                            disabled ? "opacity-50" : "hover-pointer"
                        }`}
                        variant="top"
                        src={product?.thumbnail}
                    />
                </LinkContainer>
            </div>
            <Card.Body>
                {/* Product Name */}
                <LinkContainer
                    to={`/product/${product?.id}`}
                    className={disabled ? "opacity-50" : "hover-pointer"}
                    onClick={(e) => disabled && e.preventDefault()}
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
                    {product?.type === "buying" ? t("buying") : t("selling")}
                </span>
            </h6>

            {/* Favorite Button */}
            <FavouriteButton
                className={`position-absolute`}
                style={{ top: "10px", right: "10px" }}
                disabled={disabled}
                toggled={product?.favourite}
                onClick={(e) =>
                    disabled
                        ? e.preventDefault()
                        : onFavoriteButtonClick &&
                          onFavoriteButtonClick(product?.id)
                }
            />

            {/* Price */}
            <h6
                className={`position-absolute ${
                    disabled ? "opacity-50" : "hover-pointer"
                }`}
                style={{ bottom: "10px", right: "10px" }}
            >
                <span className="text-pri">{`${product?.price} ${product?.currency}`}</span>
            </h6>
        </Card>
    );
};

export default ProductCard;
