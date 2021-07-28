import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import MessagesNavLink from "./MessagesNavLink";
import UserNavDropdown from "./UserNavDropdown";
import LoginSignUpNavLink from "./LoginSignUpNavLink";
import { NonUserNavDropdown } from "./NonUserNavDropdown";
import SelectProductType from "./SelectProductType";

const Header = () => {
    const { userInfo } = useSelector((state) => state.userInfo) || {};

    const history = useHistory();

    useEffect(() => {
        if (!userInfo) {
            history.push("");
        }
    }, [history, userInfo]);

    return (
        <header>
            <Navbar
                bg="pri"
                variant="dark"
                expand="lg"
                collapseOnSelect
                className="py-3"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <h4>
                                <strong>GetGo</strong>
                            </h4>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route
                            render={({ history }) => (
                                <SearchBar history={history} />
                            )}
                        />
                        <SelectProductType className="ms-4" />
                        <Nav>
                            {userInfo ? (
                                <>
                                    <MessagesNavLink className="ms-4" />
                                    <UserNavDropdown
                                        user={userInfo}
                                        className="ms-3"
                                    />
                                </>
                            ) : (
                                <>
                                    <LoginSignUpNavLink className="ms-4" />

                                    <NonUserNavDropdown className="ms-4" />
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
