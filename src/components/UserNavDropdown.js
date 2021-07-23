import React from "react";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserNavDropdown = ({ user }) => {
    const handleLogoutButtonClick = () => {};

    return (
        <NavDropdown
            title={`${user?.firstName} ${user?.lastName}`}
            id="username"
        >
            <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={handleLogoutButtonClick}>
                Logout
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default UserNavDropdown;