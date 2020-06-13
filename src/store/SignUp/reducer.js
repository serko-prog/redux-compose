import {ACTION_SIGNUP_CHANGE_EMAIL, ACTION_SIGNUP_CHANGE_PASSWORD, ACTION_SIGNUP_CHANGE_PASSWORD_CONFIRM } from "./actions";

const initState = {email: "", password: ""};

export default function reducerSignUp(state = initState, action) {
    switch (action.type) {
        case ACTION_SIGNUP_CHANGE_EMAIL: return {...state, email: action.email};
        case ACTION_SIGNUP_CHANGE_PASSWORD: return {...state, password: action.password};
        case ACTION_SIGNUP_CHANGE_PASSWORD_CONFIRM: return {...state, passwordConfirm: action.password};
        default: return state;
    }
}