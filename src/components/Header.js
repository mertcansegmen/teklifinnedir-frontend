import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import MessagesNavLink from "./MessagesNavLink";
import UserNavDropdown from "./UserNavDropdown";
import LoginSignUpNavLink from "./LoginSignUpNavLink";
import { NonUserNavDropdown } from "./NonUserNavDropdown";

const Header = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user) || {};

    return (
        <header>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                collapseOnSelect
                className="py-3"
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>GetGo</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route
                            render={({ history }) => (
                                <SearchBar history={history} />
                            )}
                        />
                        <Nav>
                            {user ? (
                                <>
                                    <MessagesNavLink />
                                    <UserNavDropdown user={user} />
                                </>
                            ) : (
                                <>
                                    <LoginSignUpNavLink />
                                    <NonUserNavDropdown />
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
