import React from "react";
import { Alert, Button } from "antd";
import { useTranslation } from "react-i18next";

const AlertError = ({
    message,
    showRetryButton,
    onRetryButtonClick,
    ...props
}) => {
    const { t } = useTranslation();

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
                            {t("retry")}
                        </Button>
                    )}
                </>
            }
            {...props}
        />
    );
};

export default AlertError;
