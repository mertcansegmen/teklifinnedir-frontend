import React from "react";
import { Result, Button } from "antd";
import { useTranslation } from "react-i18next";

const ResultError = ({
    title,
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
                            {t("retry")}
                        </Button>
                    )}
                </>
            }
            {...props}
        />
    );
};

export default ResultError;
