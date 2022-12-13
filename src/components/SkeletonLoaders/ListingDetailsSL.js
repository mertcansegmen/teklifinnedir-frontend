import React from "react";
import ContentLoader from "react-content-loader";

const ListingDetails = ({ className, ...props }) => {
    return (
        <ContentLoader
            width={"100%"}
            height={400}
            className={className}
            {...props}
        >
            <rect x="0" y="0" rx="4" ry="4" width="200" height="30" />

            <rect x="0" y="50" rx="16" ry="16" width="85" height="30" />
            <rect x="100" y="50" rx="16" ry="16" width="80" height="30" />
            <rect x="200" y="55" rx="16" ry="8" width="50" height="20" />
            <rect x="270" y="55" rx="16" ry="8" width="50" height="20" />

            <rect x="0" y="100" rx="32" ry="32" width="40" height="40" />
            <rect x="50" y="100" rx="8" ry="8" width="120" height="15" />
            <rect x="50" y="120" rx="8" ry="8" width="120" height="15" />
            <rect x="190" y="100" rx="8" ry="8" width="140" height="35" />

            <rect x="0" y="170" rx="8" ry="8" width="60" height="20" />
            <rect x="80" y="160" rx="16" ry="16" width="100" height="40" />
            <rect x="200" y="160" rx="16" ry="16" width="35" height="35" />

            <rect x="0" y="230" rx="16" ry="16" width="100%" height="150" />
        </ContentLoader>
    );
};

export default ListingDetails;
