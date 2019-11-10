import React, { useEffect, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Flash, Sidebar, withAuth } from "../../shared-components";
import { connect } from "react-redux";
import { fetchAllBackofficeAgents } from "../../actions/backoffice-agent-actions";
import CreateAgentForm from "./create-agent-form";
import UpdateAgentForm from "./update-agent-form";
import DeleteAgentConfirmation from "./delete-agent-confirmation";

const ManageAgents = ({ backofficeAgents, fetchAllBackofficeAgents }) => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    useEffect(() => {
        fetchAllBackofficeAgents();
    }, [fetchAllBackofficeAgents]);

    return (
        <div id="manage-agents" className="portal-page">
            <Flash />
            <Sidebar activeItem="backoffice-agents" />
            <div className="main-content">
                <h1>Manage Backoffice Agents</h1>
                <br></br>
                {showCreateForm ? (
                    <CreateAgentForm
                        onClose={() => {
                            setShowCreateForm(false);
                        }}
                    />
                ) : (
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                            setShowCreateForm(true);
                        }}
                    >
                        Create New Agent
                    </button>
                )}

                {showUpdateForm && (
                    <UpdateAgentForm
                        agent={selectedAgent}
                        onClose={() => {
                            setShowUpdateForm(false);
                        }}
                    />
                )}

                {showDeleteConfirmation && (
                    <DeleteAgentConfirmation
                        agent={selectedAgent}
                        onClose={() => {
                            setShowDeleteConfirmation(false);
                        }}
                    />
                )}
                <br />
                <br />
                <table className="table table-sm table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Access Level</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {backofficeAgents.map(agent => {
                            return (
                                <tr key={agent.id}>
                                    <td>{agent.first_name}</td>
                                    <td>{agent.last_name}</td>
                                    <td>{agent.email}</td>
                                    <td>{agent.access_level}</td>
                                    <td>{moment(agent.created_at).format("ddd, Do MMM YYYY")}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => {
                                                setSelectedAgent(agent);
                                                setShowUpdateForm(true);
                                            }}
                                        >
                                            Update
                                        </button>{" "}
                                        &nbsp;&nbsp;
                                        <button
                                            onClick={() => {
                                                setSelectedAgent(agent);
                                                setShowDeleteConfirmation(true);
                                            }}
                                            className="btn btn-sm btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

ManageAgents.propTypes = {
    backofficeAgents: PropTypes.array,
    fetchAllBackofficeAgents: PropTypes.func
};

export default withAuth(
    connect(
        state => {
            return { backofficeAgents: state.backofficeAgents };
        },
        { fetchAllBackofficeAgents }
    )(ManageAgents)
);
