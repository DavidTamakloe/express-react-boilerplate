import { FETCH_ALL_BACKOFFICE_AGENTS_SUCCESS } from "../actions/action-types";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_BACKOFFICE_AGENTS_SUCCESS:
            return action.payload.backofficeAgents;
        default:
            return state;
    }
};
