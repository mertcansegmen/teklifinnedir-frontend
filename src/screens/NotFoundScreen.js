import React from "react";
import ResultError from "../components/Errors/ResultError";

const NotFoundScreen = () => {
    return (
        <ResultError
            className="mt-5"
            title={
                "Page not found. Please check the URL or return to homepage."
            }
        />
    );
};

export default NotFoundScreen;
