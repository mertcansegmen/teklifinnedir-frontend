import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage, setLanguage } from "../slices/languageSlice";

const SelectLanguage = ({ className }) => {
    const dispatch = useDispatch();

    const { language } = useSelector((state) => state.language) || {};

    useEffect(() => {
        dispatch(getLanguage());
    }, [dispatch]);

    const languages = [
        { name: "EN", value: "en-US" },
        { name: "TR", value: "tr-TR" },
    ];

    return (
        <ButtonGroup className={"w-100 " + className}>
            {languages.map((languageItem, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-pri"
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
