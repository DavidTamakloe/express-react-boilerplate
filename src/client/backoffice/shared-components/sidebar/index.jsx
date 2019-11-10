import "./sidebar.less";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Sidebar = ({ activeItem }) => {
    return (
        <div id="backoffice-sidebar">
            <div id="sidebar-header-div">
                <p>EXPRESS REACT APP</p>
            </div>
            <ul>
                <li className={activeItem === "dashboard" ? "active" : ""}>
                    <Link to="/backoffice/dashboard">Dashboard</Link>
                </li>
                <li className={activeItem === "backoffice-agents" ? "active" : ""}>
                    <Link to="/backoffice/manage-agents">Manage Agents</Link>
                </li>
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    activeItem: PropTypes.string
};
