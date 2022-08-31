import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../slices/userSlice";
import SelectLanguage from "./SelectLanguage";

const UserNavDropdown = ({ user, className }) => {
    const { t } = useTranslation();

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
                        <span className="fw-500 text-pri">
                            {`${user?.firstName || ""} ${user?.lastName || ""}`}
                        </span>
                        <i className="fas fa-sort-down text-pri ms-2 pb-1"></i>
                    </div>
                }
            >
                <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogoutButtonClick}>
                    Logout
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="/about">
                    <NavDropdown.Item>{t("about")}</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/privacyPolicy">
                    <NavDropdown.Item>{t("privacyPolicy")}</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/termsAndConditions">
                    <NavDropdown.Item>
                        {t("termsAndConditions")}
                    </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.ItemText>
                    <SelectLanguage />
                </NavDropdown.ItemText>
            </NavDropdown>
        </div>
    );
};

export default UserNavDropdown;
