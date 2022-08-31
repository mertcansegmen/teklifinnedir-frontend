import React from "react";
import { Alert, Button } from "antd";

const AlertError = ({
    message,
    showRetryButton,
    onRetryButtonClick,
    ...props
}) => {
    if (!showRetryButton && onRetryButtonClick) {
        throw new Error(
            "showRetryButton must be true if onRetryButtonClick is defined."
        );
    }

    return (
        <Alert
            message={message}
            type="error"
            showIcon
            action={
                <>
                    {showRetryButton && (
                        <Button
                            size="small"
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

export default AlertError;
