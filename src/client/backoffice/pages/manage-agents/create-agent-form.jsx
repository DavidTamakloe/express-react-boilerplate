import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createAgent } from "../../actions/backoffice-agent-actions";

const CreateAgentForm = ({ createAgent, onClose }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [accessLevel, setAccessLevel] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMismatch(true);
        } else {
            console.log("submitted");
            createAgent({ firstName, lastName, email, accessLevel, password }, () => {
                onClose();
            });
        }
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        required
                        className="form-control"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        className="form-control"
                        required
                        value={firstName}
                        onChange={e => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        required
                        className="form-control"
                        value={lastName}
                        onChange={e => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <label>Access Level</label>
                    <select
                        required
                        className="form-control"
                        value={accessLevel}
                        onChange={e => {
                            setAccessLevel(e.target.value);
                        }}
                    >
                        <option value="">Please Select One</option>
                        <option value="0">Root</option>
                        <option value="1">Admin</option>
                        <option value="2">Standard</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        className="form-control"
                        required
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        id="confirmPasswordInput"
                        name="confirmPassword"
                        className="form-control"
                        required
                        value={confirmPassword}
                        onChange={e => {
                            setConfirmPassword(e.target.value);
                        }}
                        type="password"
                    />
                    {passwordMismatch && <span style={{ color: "red" }}>{`Passwords Don't Match`}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Create</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

CreateAgentForm.propTypes = {
    createAgent: PropTypes.func,
    onClose: PropTypes.func
};

export default connect(
    null,
    { createAgent }
)(CreateAgentForm);
