import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import axios from "axios";
import { UNAUTHENTICATING_SUCCESS } from "./actions/action-types";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ManageAgents from "./pages/manage-agents";
import Page404 from "./pages/404";

// export const store = applyMiddleware(ReduxThunk)(createStore)(reducers);
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

/** INTERCEPT 401s and logout */
axios.interceptors.response.use(
    response => response,
    err => {
        console.error(err);
        if (err && err.response && err.response.status && err.response.status == 401)
            store.dispatch({ type: UNAUTHENTICATING_SUCCESS });
        return Promise.reject(err);
    }
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/backoffice" exact component={() => <Redirect to="/backoffice/dashboard" />} />
                <Route path="/backoffice/login" exact component={Login} />
                <Route path="/backoffice/dashboard" exact component={Dashboard} />
                <Route path="/backoffice/manage-agents" exact component={ManageAgents} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
