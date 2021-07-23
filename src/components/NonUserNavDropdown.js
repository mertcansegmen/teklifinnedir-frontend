import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";
import SelectLanguage from "./SelectLanguage";

export const NonUserNavDropdown = () => {
    const { t } = useTranslation();

    return (
        <NavDropdown
            title={<i className="fas fa-ellipsis-v"></i>}
            className="ms-2"
        >
            <LinkContainer to="/about">
                <NavDropdown.Item>{t("about")}</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/privacyPolicy">
                <NavDropdown.Item>{t("privacyPolicy")}</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/termsAndConditions">
                <NavDropdown.Item>{t("termsAndConditions")}</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.ItemText>
                <SelectLanguage />
            </NavDropdown.ItemText>
        </NavDropdown>
    );
};
