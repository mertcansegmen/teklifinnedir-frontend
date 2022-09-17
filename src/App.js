import "antd/dist/antd.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { getLanguage } from "./slices/languageSlice";
import AboutScreen from "./screens/AboutScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsAndConditionsScreen from "./screens/TermsAndConditionsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Init language
        dispatch(getLanguage());
    }, [dispatch]);

    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/about" component={AboutScreen} exact />
                    <Route
                        path="/privacyPolicy"
                        component={PrivacyPolicyScreen}
                        exact
                    />
                    <Route
                        path="/termsAndConditions"
                        component={TermsAndConditionsScreen}
                        exact
                    />
                        <Route path="/profile/:id" component={ProfileScreen} />
                    <Route path="/login" component={LoginScreen} exact />
                    <Route path="/signup" component={RegisterScreen} exact />
                    <Route path="/" component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
