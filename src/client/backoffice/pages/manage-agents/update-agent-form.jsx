import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateAgent } from "../../actions/backoffice-agent-actions";

const UpdateAgentForm = ({ updateAgent, onClose, agent }) => {
    const [firstName, setFirstName] = useState(agent.first_name);
    const [lastName, setLastName] = useState(agent.last_name);
    const [email, setEmail] = useState(agent.email);
    const [accessLevel, setAccessLevel] = useState(agent.access_level);

    const onSubmit = e => {
        e.preventDefault();
        console.log("submitted");
        updateAgent({ firstName, lastName, accessLevel, agentId: agent.id }, () => {
            onClose();
        });
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        readOnly
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
                    <button className="btn btn-primary">Save</button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

UpdateAgentForm.propTypes = {
    updateAgent: PropTypes.func,
    onClose: PropTypes.func,
    agent: PropTypes.object
};

export default connect(
    null,
    { updateAgent }
)(UpdateAgentForm);
