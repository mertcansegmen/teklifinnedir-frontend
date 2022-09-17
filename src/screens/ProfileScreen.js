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

const ProfileScreen = ({ match }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [activeTabKey, setActiveTabKey] = useState("itemsForSale");

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
        const userId = match?.params?.id;
        //TODO: maybe check if userId is valid, and if not, redirect to 404 page

        dispatch(getProfileInfo(userId));
        dispatch(getItemsForSale(userId));
        dispatch(getSoldItems(userId));
        dispatch(getFavouriteItems(userId));
    }, [dispatch, match]);

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
                    match?.params?.id &&
                    dispatch(getProfileInfo(match.params.id))
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
                            match?.params?.id &&
                            dispatch(getItemsForSale(match.params.id))
                        }
                        loading={itemsForSaleLoading}
                        loadingItemSize={12}
                        emptyMessage={t("noItemsForSale")}
                    />
                </TabPane>

                <TabPane tab={t("soldItemsTab")} key="soldItems">
                    <ProductList
                        products={soldItems}
                        error={soldItemsError}
                        showRetryButton
                        onRetryButtonClick={() =>
                            match?.params?.id &&
                            dispatch(getSoldItems(match.params.id))
                        }
                        loading={soldItemsLoading}
                        loadingItemSize={12}
                        emptyMessage={t("noItemsSold")}
                    />
                </TabPane>

                {favouriteItems && (
                    <TabPane tab={t("favouritesTab")} key="favourites">
                        <ProductList
                            products={favouriteItems}
                            error={favouriteItemsError}
                            showRetryButton
                            onRetryButtonClick={() =>
                                match?.params?.id &&
                                dispatch(getFavouriteItems(match.params.id))
                            }
                            loading={favouriteItemsLoading}
                            loadingItemSize={12}
                            emptyMessage={t("noFavouriteItemFound")}
                        />
                    </TabPane>
                )}
            </Tabs>
        </>
    );
};

export default ProfileScreen;
