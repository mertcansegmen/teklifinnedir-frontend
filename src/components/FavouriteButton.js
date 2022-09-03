import React from "react";

const FavouriteButton = ({
    onClick,
    toggled,
    disabled,
    style,
    className,
    ...props
}) => {
    return (
        <i
            className={`fa-heart fa-lg ${toggled ? "fas" : "far"} ${
                disabled ? "opacity-50" : "hover-pointer"
            } ${className}`}
            style={{ color: toggled && "#ee515e", ...style }}
            onClick={(e) => !disabled && onClick && onClick(e)}
            {...props}
        ></i>
    );
};

export default FavouriteButton;
