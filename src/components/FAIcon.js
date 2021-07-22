import PropTypes from "prop-types";
import React from "react";

const FAIcon = ({ name }) => {
    return <i className={name}></i>;
};

FAIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FAIcon;
