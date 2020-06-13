import React from "react";

export default class Login extends React.Component {

    constructor() {
        super();
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeEmail(event) 
    {
        this.props.changeEmail(event.target.value);
    }

    onChangePassword(event) 
    {
        this.props.changePassword(event.target.value);
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
        <button>Login</button>
    </div>
    }
}
