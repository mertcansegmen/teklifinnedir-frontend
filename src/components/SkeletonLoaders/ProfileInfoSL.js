import React from "react";
import ContentLoader from "react-content-loader";

const ProfileInfoSL = (props) => {
    return (
        <ContentLoader height={150} width={360} {...props}>
            <circle cx="75" cy="75" r="75" />
            <rect x="170" y="40" rx="3" ry="3" width="200" height="25" />
            <rect x="170" y="75" rx="3" ry="3" width="140" height="15" />
            <rect x="330" y="75" rx="3" ry="3" width="30" height="15" />
        </ContentLoader>
    );
};

export default ProfileInfoSL;
