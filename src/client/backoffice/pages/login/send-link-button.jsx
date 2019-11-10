import "./send-link-button.less";
import React from "react";
import PropTypes from "prop-types";

const sendLinkButton = ({ isLoading, linkSent, linkFailed, sendLoginLink, onResetForm }) => {
    if (isLoading) {
        return (
            <div className={"send-link-button-div"}>
                <div className="text-div">
                    <p> sending link...</p>
                </div>
            </div>
        );
    }
    if (linkSent) {
        return (
            <div className={"send-link-button-div"}>
                <div className="text-div">
                    <p>
                        A login link has been send to your email
                        <br />
                        <a onClick={onResetForm}>send another link.</a>
                    </p>
                </div>
            </div>
        );
    }
    if (linkFailed) {
        return (
            <div className={"send-link-button-div"}>
                <div className="text-div">
                    <p>
                        Failed to send link
                        <br />
                        <a onClick={onResetForm}>send another link.</a>
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="send-link-button-div">
            <button className="link-button" onClick={sendLoginLink}>
                Send Login Link
            </button>
        </div>
    );
};

sendLinkButton.propTypes = {
    isLoading: PropTypes.bool,
    linkFailed: PropTypes.bool,
    linkSent: PropTypes.bool,
    sendLoginLink: PropTypes.func,
    onResetForm: PropTypes.func
};

export default sendLinkButton;
