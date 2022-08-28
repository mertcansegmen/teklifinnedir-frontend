import React from "react";

function Rating({ value, text, color }) {
    return (
        <span className="rating">
            <span className="me-1">
                <i
                    style={{ color }}
                    className={
                        value >= 0.8
                            ? "fas fa-star"
                            : value >= 0.3
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>

            <span className="me-1">
                <i
                    style={{ color }}
                    className={
                        value >= 1.8
                            ? "fas fa-star"
                            : value >= 1.3
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>

            <span className="me-1">
                <i
                    style={{ color }}
                    className={
                        value >= 2.8
                            ? "fas fa-star"
                            : value >= 2.3
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>

            <span className="me-1">
                <i
                    style={{ color }}
                    className={
                        value >= 3.8
                            ? "fas fa-star"
                            : value >= 3.3
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>

            <span className="me-1">
                <i
                    style={{ color }}
                    className={
                        value >= 4.8
                            ? "fas fa-star"
                            : value >= 4.3
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </span>
            <span className="ms-2">{text && text}</span>
        </span>
    );
}

Rating.defaultProps = {
    color: "#f8e825",
};

export default Rating;
