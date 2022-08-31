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
import ProfileInfoSL from "../components/SkeletonLoaders/ProfileInfoSL";

const { TabPane } = Tabs;

const ProfileScreen = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [activeTabKey, setActiveTabKey] = useState("itemsForSale");

    const { userInfo } = useSelector((state) => state.userInfo);

    const {
        profileInfo,
        loading: profileInfoLoading,
        error: profileInfoError,
    } = useSelector((state) => state.profileInfo);

    const {
        itemsForSale,
        loading: itemsForSaleLoading,
        error: itemsForSaleError,
    } = useSelector((state) => state.itemsForSale);

    const {
        soldItems,
        loading: soldItemsLoading,
        error: soldItemsError,
    } = useSelector((state) => state.soldItems);

    const {
        favouriteItems,
        loading: favouriteItemsLoading,
        error: favouriteItemsError,
    } = useSelector((state) => state.favouriteItems);

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
                loading={profileInfoLoading}
                error={profileInfoError}
                showRetryButton
                onRetryButtonClick={() =>
                    userInfo?.id && dispatch(getProfileInfo(userInfo.id))
                }
                className={"mt-5"}
            />

            <Tabs
                activeKey={activeTabKey}
                onChange={setActiveTabKey}
                className="mt-4"
            >
                <TabPane tab={t("itemsForSaleTab")} key="itemsForSale">
                    <ProductList
                        products={itemsForSale}
                        error={itemsForSaleError}
                        showRetryButton
                        onRetryButtonClick={() =>
                            userInfo?.id &&
                            dispatch(getItemsForSale(userInfo.id))
                        }
                        loading={itemsForSaleLoading}
                        loadingItemSize={12}
                        emptyMessage="This user has no items for sale."
                    />
                </TabPane>

                <TabPane tab={t("soldItemsTab")} key="soldItems">
                    <ProductList
                        products={soldItems}
                        error={soldItemsError}
                        showRetryButton
                        onRetryButtonClick={() =>
                            userInfo?.id && dispatch(getSoldItems(userInfo.id))
                        }
                        loading={soldItemsLoading}
                        loadingItemSize={12}
                        emptyMessage="This user has not sold any items."
                    />
                </TabPane>

                {favouriteItems && (
                    <TabPane tab={t("favouritesTab")} key="favourites">
                        <ProductList
                            products={favouriteItems}
                            error={favouriteItemsError}
                            showRetryButton
                            onRetryButtonClick={() =>
                                userInfo?.id &&
                                dispatch(getFavouriteItems(userInfo.id))
                            }
                            loading={favouriteItemsLoading}
                            loadingItemSize={12}
                            emptyMessage="No favourite items found."
                        />
                    </TabPane>
                )}
            </Tabs>
        </>
    );
};

export default ProfileScreen;
