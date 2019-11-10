import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAgent } from "../../actions/backoffice-agent-actions";

const DeleteAgentForm = ({ deleteAgent, agent, onClose }) => {
    return (
        <div>
            Are you sure you want to delete this agent? This action cannot be undone.
            <br></br>
            <button
                className="btn btn-danger"
                onClick={() => {
                    deleteAgent(agent.id, () => {
                        onClose();
                    });
                }}
            >
                Yes, Delete this agent
            </button>
            &nbsp;&nbsp;
            <button onClick={onClose} className="btn btn-primary">
                Cancel
            </button>
        </div>
    );
};

DeleteAgentForm.propTypes = {
    deleteAgent: PropTypes.func,
    onClose: PropTypes.func,
    agent: PropTypes.object
};

export default connect(
    null,
    { deleteAgent }
)(DeleteAgentForm);
