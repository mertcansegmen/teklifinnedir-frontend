import React from "react";
import { useTranslation } from "react-i18next";

const ListingPrice = ({
    className,
    listingType,
    price,
    favorite,
    onFavoriteButtonClick,
}) => {
    const { t } = useTranslation();

    return (
        <div className={className}>
            <div className="d-flex align-items-center">
                <h6>
                    <span className="badge text-pri bg-light rounded-pill">
                        {listingType === "buying" ? t("buying") : t("selling")}
                    </span>
                </h6>
                <h1 className="text-pri ms-3">{`${price?.value} ${price?.currencySymbol}`}</h1>

                {/* Favorite Button */}
                {favorite ? (
                    <i
                        className="fas fa-heart fa-2x hover-pointer text-danger ms-3"
                        onClick={() =>
                            onFavoriteButtonClick && onFavoriteButtonClick()
                        }
                    ></i>
                ) : (
                    <i
                        className="far fa-heart fa-2x hover-pointer ms-3"
                        onClick={() =>
                            onFavoriteButtonClick && onFavoriteButtonClick()
                        }
                    ></i>
                )}
            </div>
        </div>
    );
};

export default ListingPrice;
