import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MessagesNavLink = ({ className }) => {
    return (
        <LinkContainer to="/messages" className={"mt-1 " + className}>
            <Nav.Link>
                <i className="fas fa-comment-alt fa-lg text-pri"></i>
            </Nav.Link>
        </LinkContainer>
    );
};

export default MessagesNavLink;
