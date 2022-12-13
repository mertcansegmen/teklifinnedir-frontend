import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./ListingUser.css";
import Rating from "./Rating";

const ListingUser = ({
    userId,
    userImage,
    userFirstName,
    userLastName,
    userRating,
    className,
}) => {
    const { t } = useTranslation();

    return (
        <div className={`d-flex align-items-center ${className}`}>
            <Link to={`/profile/${userId}`}>
                <span className=" ratio-1x1">
                    <img
                        className="listing-user-image hover-pointer"
                        style={{ width: "40px", height: "40px" }}
                        src={userImage}
                        alt={"product"}
                    />
                </span>
            </Link>

            <span className="d-flex flex-column ms-3">
                <span>{`${userFirstName} ${userLastName}`}</span>
                <Rating value={userRating} />
            </span>

            <Link to={`/chat/${userId}`}>
                <Button variant="pri" className="ms-3">
                    {t("sendMessage")} <i className="fas fa-chevron-right"></i>
                </Button>
            </Link>
        </div>
    );
};

export default ListingUser;
