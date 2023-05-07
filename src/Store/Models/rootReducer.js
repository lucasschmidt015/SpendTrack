import { combineReducers } from "redux";
import user from "./User/Reducer";
import SidebarConf from "./SidebarConf/reducer";

export default combineReducers({
    user,
    SidebarConf,
})