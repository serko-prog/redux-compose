import React from "react";
import {connect} from "react-redux";
import SignUp from "./SignUp";
import {changeEmail, changePassword, changePasswordConfirm } from "../../store/SignUp/actions";

class SignUpContainer extends React.Component {
    render () {
        return <SignUp {...this.props} />
    }
}

function mapState(state) {
    return {
        email: state.signup.email, 
        password: state.signup.password, 
        passwordConfirm: state.signup.passwordConfirm
    };
}

export default connect(mapState, {changeEmail, changePassword, changePasswordConfirm})(SignUpContainer);
