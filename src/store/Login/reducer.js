import {ACTION_LOGIN_CHANGE_EMAIL, ACTION_LOGIN_CHANGE_PASSWORD } from "./actions";

const initState = {email: "", password: ""};

export default function reducerLogin(state = initState, action) {
    switch (action.type) {
        case ACTION_LOGIN_CHANGE_EMAIL: return {...state, email: action.email};
        case ACTION_LOGIN_CHANGE_PASSWORD: return {...state, password: action.password};
        default: return state;
    }
}