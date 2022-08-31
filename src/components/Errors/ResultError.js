import React from "react";
import { Result, Button } from "antd";

const ResultError = ({
    title,
    showRetryButton,
    onRetryButtonClick,
    ...props
}) => {
    if (!showRetryButton && onRetryButtonClick) {
        throw new Error(
            "showRetryButton must be true if onRetryButtonClick is defined"
        );
    }

    return (
        <Result
            status="error"
            title={title}
            extra={
                <>
                    {showRetryButton && (
                        <Button
                            type="primary"
                            onClick={(e) =>
                                onRetryButtonClick && onRetryButtonClick(e)
                            }
                        >
                            Retry
                        </Button>
                    )}
                </>
            }
            {...props}
        />
    );
};

export default ResultError;
