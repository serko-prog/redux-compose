import React from "react";

export default class SignUp extends React.Component {

    constructor() {
        super();
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
    }

    onChangeEmail(event) 
    {
        this.props.changeEmail(event.target.value);
    }

    onChangePassword(event) 
    {
        this.props.changePassword(event.target.value);
    }

    onChangePasswordConfirm(event) 
    {
        this.props.changePasswordConfirm(event.target.value);
    }

    render () {
        return <div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" value={this.props.email} onChange={this.onChangeEmail}/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="text" id="password" value={this.props.password} onChange={this.onChangePassword}/>
        </div>
        <div>
            <label htmlFor="passwordConfirm">Password confirm: </label>
            <input type="text" id="passwordConfirm" value={this.props.passwordConfirm} onChange={this.onChangePasswordConfirm}/>
        </div>
        <button>Sign Up</button>
    </div>
    }
}
