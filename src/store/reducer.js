import { combineReducers } from "redux";
import reducerLogin from "./Login/reducer";
import reducerSignUp from "./SignUp/reducer";

export default combineReducers({ login: reducerLogin, signup: reducerSignUp });
