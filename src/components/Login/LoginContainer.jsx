import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {changeEmail, changePassword} from "../../store/Login/actions";

class LoginContainer extends React.Component {
    render () {
        return <Login {...this.props} />
    }
}

function mapState(state) {
    return {
        email: state.login.email, 
        password: state.login.password
    };
}

export default connect(mapState, {changeEmail, changePassword})(LoginContainer);
