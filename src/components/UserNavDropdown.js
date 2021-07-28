import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../slices/userSlice";

const UserNavDropdown = ({ user, className }) => {
    const dispatch = useDispatch();

    const handleLogoutButtonClick = () => {
        dispatch(logout());
    };

    return (
        <div>
            <NavDropdown
                className={className}
                title={
                    <div className="d-flex align-items-center">
                        <span className="fw-500">
                            {`${user?.firstName || ""} ${user?.lastName || ""}`}
                        </span>
                        <i className="fas fa-sort-down text-light ms-2 pb-1"></i>
                    </div>
                }
            >
                <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogoutButtonClick}>
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    );
};

export default UserNavDropdown;
