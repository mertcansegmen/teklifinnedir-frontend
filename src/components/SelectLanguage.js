import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage, setLanguage } from "../slices/languageSlice";

const SelectLanguage = () => {
    const dispatch = useDispatch();

    const { language } = useSelector((state) => state.language);

    useEffect(() => {
        dispatch(getLanguage());
    }, [dispatch]);

    const languages = [
        { name: "English", value: "en-US" },
        { name: "Türkçe", value: "tr-TR" },
    ];
    return (
        <ButtonGroup>
            {languages.map((languageItem, idx) => (
                <ToggleButton
                    key={idx}
                    // id={`radio-${idx}`}
                    type="radio"
                    variant="outline-success"
                    name="radio"
                    value={languageItem.value}
                    checked={language === languageItem.value}
                    onChange={(e) =>
                        dispatch(setLanguage(e.currentTarget.value))
                    }
                >
                    {languageItem.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};

export default SelectLanguage;
