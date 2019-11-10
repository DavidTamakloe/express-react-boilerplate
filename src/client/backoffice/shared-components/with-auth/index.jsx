import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

/**
 * An HOC that wraps the component in a function which checks for authentication.
 * If authenticated the component is renderd, else it redirects to the login page
 *
 * @param {*} Element The component to rendered if auth check is passed
 * @param {string} redirect The path to redirect is auth fails
 */
export const withAuth = function(Element, redirect = "/backoffice/login") {
    return connect(state => ({ isAuthenticated: state.auth.isAuthenticated }))(
        // eslint-disable-next-line
        class extends Component {
            static get propTypes() {
                return { isAuthenticated: PropTypes.bool };
            }

            render() {
                if (!this.props.isAuthenticated) return <Redirect to={redirect} />;
                return <Element {...this.props} />;
            }
        }
    );
};
