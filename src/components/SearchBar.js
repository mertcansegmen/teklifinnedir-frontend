import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const SearchBar = ({ className, history }) => {
    const { t } = useTranslation();

    const [keyword, setKeyword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        keyword.trim()
            ? history.push(`/search?query=${keyword}`)
            : history.push("/");
    };

    return (
        <Form
            className={`d-flex w-100 ${className}`}
            onSubmit={handleFormSubmit}
        >
            <FormControl
                type="search"
                placeholder={t("searchProducts")}
                className="max-radius"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button
                type="submit"
                variant="outline-success"
                className="max-radius ms-2"
            >
                {t("search")}
            </Button>
        </Form>
    );
};

export default SearchBar;
