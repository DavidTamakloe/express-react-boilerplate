import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth-actions";
import { withAuth, Sidebar, Flash } from "../../shared-components";

const Dashboard = ({ logout }) => {
    const onLogoutClicked = () => {
        logout();
    };
    return (
        <div id="dashboard" className="portal-page">
            <Flash />
            <Sidebar activeItem="dashboard" />
            <div className="main-content">
                <br></br>
                <div className="jumbotron">
                    <h5 className="display-4">Welcome to your Express-React Backoffice!</h5>
                    <p className="lead">All the best on your journey to production and beyond.</p>
                    <hr></hr>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg" onClick={onLogoutClicked}>
                            Logout
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    logout: PropTypes.func
};

export default withAuth(
    connect(
        null,
        { logout }
    )(Dashboard)
);
