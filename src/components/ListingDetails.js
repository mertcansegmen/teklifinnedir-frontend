import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListingDetails = ({
    className,
    location,
    category,
    seenCount,
    favoriteCount,
}) => {
    return (
        <div className={className}>
            <i className="fas fa-map-marker-alt"></i>
            <span className="ms-2">{location?.city}</span>
            <Link to={`search?categories=${category?.id}`} className="ms-3">
                <Button
                    className="max-radius"
                    size="sm"
                    style={{
                        backgroundColor: category?.colorCode,
                        borderColor: category?.colorCode,
                    }}
                >
                    <i className={category?.faIconName}></i> {category?.name}
                </Button>
            </Link>

            <i className="fas fa-eye fa-xs ms-3"></i>
            <small>
                <small className="fw-700 ms-1">{seenCount}</small>
            </small>
            <i className="fas fa-heart fa-xs ms-3"></i>
            <small>
                <small className="fw-700 ms-1">{favoriteCount}</small>
            </small>
        </div>
    );
};

export default ListingDetails;
