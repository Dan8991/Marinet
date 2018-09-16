import * as React from "react";
import { Edit } from "../basic_comp/Edit"
import { Button } from "../basic_comp/Button";

export interface ILoginState {
    username: string;
    password: string;
    error: string;
}

const externGridStyle = {
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto auto auto",
    gridGap: "10px",
    justifyContent: "center",
}

const internGridCenter = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "5px",
    justifyContent: "center",
}

const errorStyle = {
    color: "red",
    textAlign: "center" as "center",
    fontSize:"15px"
}

export interface ILoginProps {
    onLogInClick: () => void;
    onSignInClick: () => void;
}


export class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
        this.state = { username: "", password: "", error: "" };
    }



    render() {
        return (
            <div style={externGridStyle}>
                <div style={internGridCenter}>
                    <Button
                        text="Log in"
                        onClick={() => {
                            this.onLogInClick(this.state.username, this.state.password)
                        }}
                    />
                    <Button
                        text="Sign in"
                        onClick={() => {
                            this.onSignInClick(this.state.username, this.state.password)
                        }}
                    />
                </div>
                <div>
                    <Edit hint="username" handleChange={this.onUsernameChange} />
                </div>
                <div>
                    <Edit hint="password" isPassword={true} handleChange={this.onPasswordChange} />
                </div>
                <div>
                    <h1 style={errorStyle}>{this.state.error}</h1>
                </div>
            </div>
        );
    }

    private onUsernameChange: (e: any) => void = (e: any) => {
        this.setState({ username: e.target.value });
    }

    private onPasswordChange: (e: any) => void = (e: any) => {
        this.setState({ password: e.target.value });
    }

    private onSignInClick: (username: string, password: string) => void = (username: string, password: string) => {

        let myInit = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password })
        };

        fetch("http://127.0.0.1:5000/api/users", myInit).then((result: any) => {
            result.json().then((json: { id: number }) => {
                if (json.id > 0) {
                    this.props.onSignInClick()
                } else {
                    this.setState({error: "username already exists"});
                }
            });
        });
    }

    private onLogInClick: (username: string, password: string) => void = (username: string, password: string) => {

        let myInit = {
            method: 'GET',
            headers: new Headers()
        };

        fetch("http://127.0.0.1:5000/api/users?username=" + username + "&password=" + password, myInit).then((result: any) => {
            result.json().then((json: { id: number }) => {
                if (json.id > 0) {
                    this.props.onLogInClick()
                } else if (json.id === -1){
                    this.setState({error: "incorrect password"});
                } else if (json.id === -2){
                    this.setState({error: "username does not exist"});
                }
            });
        });
    }
}