export const ACTION_LOGIN_CHANGE_EMAIL = "ACTION_LOGIN_CHANGE_EMAIL";
export const ACTION_LOGIN_CHANGE_PASSWORD = "ACTION_LOGIN_CHANGE_PASSWORD";

export const changeEmail = (email) => ({ type: ACTION_LOGIN_CHANGE_EMAIL, email: email });
export const changePassword = (password) => ({ type: ACTION_LOGIN_CHANGE_PASSWORD, password: password });