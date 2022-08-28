import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    return (
        <div className={`d-flex align-items-center ${className}`}>
            <Link to={`/user/${userId}`}>
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
                    Send Message <i className="fas fa-chevron-right"></i>
                </Button>
            </Link>
        </div>
    );
};

export default ListingUser;
