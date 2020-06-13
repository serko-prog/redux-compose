export const ACTION_SIGNUP_CHANGE_EMAIL = "ACTION_SIGNUP_CHANGE_EMAIL";
export const ACTION_SIGNUP_CHANGE_PASSWORD = "ACTION_SIGNUP_CHANGE_PASSWORD";
export const ACTION_SIGNUP_CHANGE_PASSWORD_CONFIRM = "ACTION_SIGNUP_CHANGE_PASSWORD_CONFIRM";

export const changeEmail = (email) => ({ type: ACTION_SIGNUP_CHANGE_EMAIL, email: email });
export const changePassword = (password) => ({ type: ACTION_SIGNUP_CHANGE_PASSWORD, password: password });
export const changePasswordConfirm = (password) => ({ type: ACTION_SIGNUP_CHANGE_PASSWORD_CONFIRM, password: password });