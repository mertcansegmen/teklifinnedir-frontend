import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ProfileInfo from "../components/ProfileInfo";
import { Tabs } from "antd";
import { getProfileInfo } from "../slices/profileInfoSlice";
import { getItemsForSale } from "../slices/itemsForSaleSlice";
import { getSoldItems } from "../slices/soldItemsSlice";
import { getFavouriteItems } from "../slices/favouriteItemsSlice";
import ProductList from "../components/ProductList";

const { TabPane } = Tabs;

const ProfileScreen = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [activeTabKey, setActiveTabKey] = useState("itemsForSale");

    const { userInfo } = useSelector((state) => state.userInfo);

    const { profileInfo, profileInfoLoading, profileInfoError } = useSelector(
        (state) => state.profileInfo
    );

    const { itemsForSale, itemsForSaleLoading, itemsForSaleError } =
        useSelector((state) => state.itemsForSale);

    const { soldItems, soldItemsLoading, soldItemsError } = useSelector(
        (state) => state.soldItems
    );

    const { favouriteItems, favouriteItemsLoading, favouriteItemsError } =
        useSelector((state) => state.favouriteItems);

    useEffect(() => {
        if (userInfo?.id) {
            dispatch(getProfileInfo(userInfo.id));
            dispatch(getItemsForSale(userInfo.id));
            dispatch(getSoldItems(userInfo.id));
            dispatch(getFavouriteItems(userInfo.id));
        }
    }, [dispatch, userInfo]);

    return (
        <>
            <ProfileInfo
                firstName={profileInfo?.firstName || ""}
                lastName={profileInfo?.lastName || ""}
                rating={profileInfo?.averageRating || 0}
                profileImage={profileInfo?.profileImage}
            />

            <Tabs
                activeKey={activeTabKey}
                onChange={setActiveTabKey}
                className="mt-4"
            >
                <TabPane tab={t("itemsForSaleTab")} key="itemsForSale">
                    <ProductList products={itemsForSale} />
                </TabPane>
                <TabPane tab={t("soldItemsTab")} key="soldItems">
                    <ProductList products={soldItems} />
                </TabPane>
                {favouriteItems && (
                    <TabPane tab={t("favouritesTab")} key="favourites">
                        <ProductList products={favouriteItems} />
                    </TabPane>
                )}
            </Tabs>
        </>
    );
};

export default ProfileScreen;
