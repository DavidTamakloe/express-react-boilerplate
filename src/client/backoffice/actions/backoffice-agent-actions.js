import axios from "axios";
import { API_URL } from "../config/constants";
import { FETCH_ALL_BACKOFFICE_AGENTS_SUCCESS } from "./action-types";
import { addAndRemoveFlash } from "./flash-actions";

export const fetchAllBackofficeAgents = () => dispatch => {
    axios
        .get(`${API_URL}/backoffice-agents/fetch-all`)
        .then(response => {
            dispatch({
                type: FETCH_ALL_BACKOFFICE_AGENTS_SUCCESS,
                payload: { backofficeAgents: response.data.backofficeAgents }
            });
        })
        .catch(error => {
            console.log(error);
            dispatch(addAndRemoveFlash("danger", "unable to fetch backoffice agents"));
        });
};

export const createAgent = ({ firstName, lastName, email, accessLevel, password }, callback) => dispatch => {
    axios
        .post(`${API_URL}/backoffice-agents/create`, { firstName, lastName, email, accessLevel, password })
        .then(() => {
            dispatch(addAndRemoveFlash("success", "Agent created successfully"));
            dispatch(fetchAllBackofficeAgents());
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.log(error);
            dispatch(addAndRemoveFlash("danger", "unable to create backoffice agent"));
        });
};

export const updateAgent = ({ firstName, lastName, accessLevel, agentId }, callback) => dispatch => {
    axios
        .post(`${API_URL}/backoffice-agents/update`, { firstName, lastName, accessLevel, agentId })
        .then(() => {
            dispatch(addAndRemoveFlash("success", "Agent updated successfully"));
            dispatch(fetchAllBackofficeAgents());
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.log(error);
            dispatch(addAndRemoveFlash("danger", "unable to update backoffice agent"));
        });
};

export const deleteAgent = (agentId, callback) => dispatch => {
    axios
        .post(`${API_URL}/backoffice-agents/delete`, { agentId })
        .then(() => {
            dispatch(addAndRemoveFlash("info", "Agent deleted successfully"));
            dispatch(fetchAllBackofficeAgents());
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.log(error);
            dispatch(addAndRemoveFlash("danger", "unable to delete backoffice agent"));
        });
};
