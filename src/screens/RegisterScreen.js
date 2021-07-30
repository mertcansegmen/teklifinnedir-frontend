import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../slices/userSlice";

const RegisterScreen = ({ location, history }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const { userInfo } = useSelector((state) => state.userInfo);

    useEffect(() => {
        if (userInfo) {
            history.push("");
        }
    }, [history, userInfo]);

    const handleRegisterButtonClick = () => {
        dispatch(
            register({ email, password, confirmPassword, firstName, lastName })
        );
    };

    return (
        <div className="d-flex justify-content-center mx-3">
            <div className="mt-5 elevated" style={{ width: "500px" }}>
                <form className="d-flex flex-column p-5">
                    <h1 className="align-self-center text-pri fw-700">
                        {t("registerTitle")}
                    </h1>
                    <h4 className="align-self-center mt-2 fw-300">
                        {t("registerSubTitle")}
                    </h4>

                    <div class="mt-4">
                        <label className="form-label">
                            {t("emailAddress")}
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg max-radius"
                            onChange={setEmail}
                        />
                    </div>

                    <div class="mt-3">
                        <label className="form-label">{t("password")}</label>
                        <input
                            type="password"
                            className="form-control form-control-lg max-radius"
                            onChange={setPassword}
                        />
                    </div>

                    <div class="mt-3">
                        <label className="form-label">
                            {t("confirmPassword")}
                        </label>
                        <input
                            type="password"
                            className="form-control form-control-lg max-radius"
                            onChange={setConfirmPassword}
                        />
                    </div>

                    <div class="mt-4">
                        <label className="form-label">{t("firstName")}</label>
                        <input
                            type="text"
                            className="form-control form-control-lg max-radius"
                            onChange={setFirstName}
                        />
                    </div>

                    <div class="mt-4">
                        <label className="form-label">{t("lastName")}</label>
                        <input
                            type="text"
                            className="form-control form-control-lg max-radius"
                            onChange={setLastName}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-lg btn-pri align-self-center max-radius purple-gradient mt-5"
                        style={{ width: "250px" }}
                        onClick={handleRegisterButtonClick}
                    >
                        {t("register")}
                    </button>

                    <Link
                        to={`/login`}
                        className="d-inline align-self-center text-link mt-3"
                    >
                        {t("haveAnAccountLogin")}
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default RegisterScreen;
