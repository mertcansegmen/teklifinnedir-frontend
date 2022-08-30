import React, { useEffect, useState } from "react";
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
            />

            <Tabs activeKey={activeTabKey} onChange={setActiveTabKey}>
                <TabPane tab="Items For Sale" key="itemsForSale">
                    <ProductList products={itemsForSale} />
                </TabPane>
                <TabPane tab="Sold Items" key="soldItems">
                    <ProductList products={soldItems} />
                </TabPane>
                {favouriteItems && (
                    <TabPane tab="Favourites" key="favourites">
                        <ProductList products={favouriteItems} />
                    </TabPane>
                )}
            </Tabs>
        </>
    );
};

export default ProfileScreen;
