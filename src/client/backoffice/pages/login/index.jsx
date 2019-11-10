import "./index.less";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth-actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Flash } from "../../shared-components";

const LoginForm = ({ login, history, isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to={"/backoffice/dashboard"} />;
    }
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const onLoginClicked = () => {
        login({ email: loginEmail, password: loginPassword }, err => {
            if (err) {
                return console.log(err);
            }
            history.push("/backoffice/dashboard");
        });
    };

    return (
        <div id="login-page">
            <Flash />
            <div className="form-div">
                <h3>Express React App Backoffice</h3>
                <hr></hr>
                <form className="form">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            name="email"
                            required
                            type="email"
                            placeholder="Please enter your email"
                            value={loginEmail}
                            onChange={e => {
                                setLoginEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            className="form-control"
                            required
                            name="password"
                            type="password"
                            value={loginPassword}
                            onChange={e => {
                                setLoginPassword(e.target.value);
                            }}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={e => {
                                e.preventDefault();
                                onLoginClicked();
                            }}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>

            <br />
        </div>
    );
};

LoginForm.propTypes = {
    login: PropTypes.func,
    history: PropTypes.object,
    isAuthenticated: PropTypes.bool
};

export default connect(
    state => {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    },
    { login }
)(LoginForm);
