import React from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";

const LoginSignUpNavLink = () => {
    const { t } = useTranslation();

    return (
        <LinkContainer to="/login">
            <Nav.Link className="ms-2">
                <p style={{ whiteSpace: "nowrap" }} className="mb-0">
                    {t("loginOrSignUp")}
                </p>
            </Nav.Link>
        </LinkContainer>
    );
};

export default LoginSignUpNavLink;
