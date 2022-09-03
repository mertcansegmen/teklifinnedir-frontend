import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ResultError from "../components/Errors/ResultError";
import ImageCarousel from "../components/ImageCarousel";
import ListingDetails from "../components/ListingDetails";
import ListingPrice from "../components/ListingPrice";
import ListingUser from "../components/ListingUser";
import ProductScreenSL from "../components/SkeletonLoaders/ProductScreenSL";
import { getProduct } from "../slices/productSlice";

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProduct(match?.params?.id));
    }, [dispatch, match]);

    if (error) {
        return (
            <ResultError
                title={error}
                showRetryButton
                onRetryButtonClick={() =>
                    dispatch(getProduct(match?.params?.id))
                }
            />
        );
    }

    if (loading) {
        return <ProductScreenSL />;
    }

    return (
        <div className="mt-5">
            <Row>
                <Col lg={5} className="mb-3">
                    <ImageCarousel
                        images={product?.images}
                        subImageHeight="100px"
                        subImageWidth="100px"
                    />
                </Col>

                <Col lg={7}>
                    {/* Product Title */}
                    <h3>{product?.name}</h3>

                    <ListingDetails
                        className="mt-3"
                        category={product?.category}
                        location={product?.location}
                        seenCount={product?.seenCount}
                        favouriteCount={product?.favouriteCount}
                    />

                    <ListingUser
                        className="mt-3"
                        userImage="https://kstu.edu.tr/kstu-file/uploads/default-user-image.png"
                        userRating={product?.user?.rating}
                        userFirstName={product?.user?.firstName}
                        userLastName={product?.user?.lastName}
                        userId={product?.user?.id}
                    />

                    <ListingPrice
                        className="mt-3"
                        listingType={product?.type}
                        price={product?.price}
                        favorite={product?.favorite}
                    />

                    {/* Description */}
                    <p className="mt-3">{product?.description}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProductScreen;
