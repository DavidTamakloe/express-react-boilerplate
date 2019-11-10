import "./index.less";
import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className="portal-page" id="page-404">
            <h3>404 - Page Not Found</h3>
            <hr />
            <p>Sorry, this page either does not exist or has gone on vacation and {"didn't"} leave a replacement.</p>
            <Link to="/backoffice" className="btn btn-primary btn-lg btn-block">
                Dashboard
            </Link>
        </div>
    );
}
