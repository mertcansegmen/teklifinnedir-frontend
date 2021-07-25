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

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Init language
        dispatch(getLanguage());
    }, [dispatch]);

    return (
        // basename attribute is for github pages
        <Router basename={"getgo-frontend"}>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/about" component={AboutScreen} />
                    <Route
                        path="/privacyPolicy"
                        component={PrivacyPolicyScreen}
                    />
                    <Route
                        path="/termsAndConditions"
                        component={TermsAndConditionsScreen}
                    />
                    <Route path="/login" component={LoginScreen} exact />
                    <Route path="/" component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
