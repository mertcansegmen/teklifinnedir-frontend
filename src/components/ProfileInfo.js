import React from "react";

import Rating from "./Rating";
import ProfileInfoSL from "./SkeletonLoaders/ProfileInfoSL";
import AlertError from "./Errors/AlertError";

const ProfileInfo = ({
    firstName = "",
    lastName = "",
    rating = 0,
    profileImage = require("../assets/images/profile-placeholder.png"),
    loading,
    error,
    showRetryButton,
    onRetryButtonClick,
    ...props
}) => {
    if (!showRetryButton && onRetryButtonClick) {
        throw new Error(
            "showRetryButton must be true if onRetryButtonClick is defined."
        );
    }

    if (error) {
        return (
            <AlertError
                message={error}
                showRetryButton={showRetryButton}
                onRetryButtonClick={onRetryButtonClick}
                {...props}
            />
        );
    }

    if (loading) {
        return <ProfileInfoSL {...props} />;
    }

    return (
        <div
            {...props}
            className={`d-flex flex-row align-items-center ${props.className}`}
        >
            <img
                style={{ width: "150px", height: "150px" }}
                className="rounded-circle"
                src={profileImage}
                alt="Profile"
            />
            <div className="ms-4">
                <h3>{firstName + " " + lastName}</h3>
                <Rating value={rating} text={rating + ""} />
            </div>
        </div>
    );
};

export default ProfileInfo;
