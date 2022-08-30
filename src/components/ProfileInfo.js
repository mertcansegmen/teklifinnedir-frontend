import React from "react";
import Rating from "./Rating";

const ProfileInfo = ({ firstName = "", lastName = "", rating = 0 }) => {
    return (
        <>
            <h3 className="mt-4">{firstName + " " + lastName}</h3>
            <Rating value={rating} text={rating + ""} />
        </>
    );
};

export default ProfileInfo;
