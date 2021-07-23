import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MessagesNavLink = () => {
    return (
        <LinkContainer to="/messages" className="mt-1 ms-2">
            <Nav.Link>
                <i className="fas fa-comment-alt fa-lg"></i>
            </Nav.Link>
        </LinkContainer>
    );
};

export default MessagesNavLink;
