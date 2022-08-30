import React from "react";
import Rating from "./Rating";

const ProfileInfo = ({
    firstName = "",
    lastName = "",
    rating = 0,
    profileImage = require("../assets/images/profile-placeholder.png"),
}) => {
    return (
        <div className="d-flex flex-row align-items-center mt-5">
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
