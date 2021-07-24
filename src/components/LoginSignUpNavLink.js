import React from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";

const LoginSignUpNavLink = ({ className }) => {
    const { t } = useTranslation();

    return (
        <LinkContainer to="/login" className={className}>
            <Nav.Link>
                <p className="mb-0 no-wrap">{t("loginOrSignUp")}</p>
            </Nav.Link>
        </LinkContainer>
    );
};

export default LoginSignUpNavLink;
