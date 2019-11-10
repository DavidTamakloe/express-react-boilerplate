import { combineReducers } from "redux";
import flash from "./flash-reducer";
import loading from "./loading-reducer";
import auth from "./auth-reducer";
import backofficeAgents from "./backoffice-agents-reducer";

export default combineReducers({
    flash,
    loading,
    auth,
    backofficeAgents
});
