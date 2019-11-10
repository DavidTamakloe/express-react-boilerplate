import axios from "axios";
import { addAndRemoveFlash, removeAllFlash } from "./flash-actions";
import { addLoadingEntry, removeLoadingEntry } from "./loading-actions";
import { AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED, UNAUTHENTICATING_SUCCESS } from "./action-types";
import { UNAUTHENTICATING } from "../config/loading-entries";
import { API_URL } from "../config/constants";

export const login = ({ email, password }, callback) => dispatch => {
    axios
        .post(`${API_URL}/auth/login`, { email, password })
        .then(() => {
            dispatch({ type: AUTHENTICATION_SUCCESS });
            dispatch(removeAllFlash());
            dispatch(addAndRemoveFlash("success", "Welcome"));
            callback();
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: AUTHENTICATION_FAILED });
            callback(err);
            dispatch(addAndRemoveFlash("danger", "Unable to login. Please check credentials and try again."));
        });
};

export const signup = ({ firstName, lastName, email, password }, callback) => dispatch => {
    axios
        .post(`${API_URL}/auth/signup`, { firstName, lastName, email, password })
        .then(() => {
            dispatch({ type: AUTHENTICATION_SUCCESS });
            dispatch(removeAllFlash());
            dispatch(addAndRemoveFlash("success", "Signed up successfully"));
            callback();
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: AUTHENTICATION_FAILED });
            callback(err);
            dispatch(addAndRemoveFlash("danger", "Unable to signup"));
        });
};

export const logout = () => dispatch => {
    dispatch(addLoadingEntry(UNAUTHENTICATING));

    axios
        .get(`${API_URL}/auth/logout`)
        .then(() => {
            dispatch(removeAllFlash());
            dispatch(removeLoadingEntry(UNAUTHENTICATING));
            dispatch({ type: UNAUTHENTICATING_SUCCESS });
        })
        .catch(err => {
            console.log(err);
            dispatch(removeLoadingEntry(UNAUTHENTICATING));
            dispatch(addAndRemoveFlash("danger", "Unable to logout."));
        });
};
