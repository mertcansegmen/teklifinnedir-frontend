import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProductType, setProductType } from "../slices/productTypeSlice";

const SelectProductType = ({ className }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { productType } = useSelector((state) => state.productType) || {};

    useEffect(() => {
        dispatch(getProductType());
    }, [dispatch]);

    const productTypes = [
        { name: t("buyerPosts"), value: "buying" },
        { name: t("sellerPosts"), value: "selling" },
    ];

    return (
        <ButtonGroup className={className}>
            {productTypes.map((eachProductType, idx) => (
                <ToggleButton
                    className="no-wrap fw-600"
                    key={idx}
                    type="radio"
                    variant="outline-light"
                    value={eachProductType.value}
                    checked={productType === eachProductType.value}
                    onChange={(e) =>
                        dispatch(setProductType(e.currentTarget.value))
                    }
                >
                    {eachProductType.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};

export default SelectProductType;
