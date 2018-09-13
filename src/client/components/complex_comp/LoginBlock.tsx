import * as React from "react";
import { Edit } from "../basic_comp/Edit"
import { Button } from "../basic_comp/Button";

export interface ILoginBlockState {
    username: string;
    password: string;
    id: number;
}

const externGridStyle = {
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto auto auto",
    gridGap: "10px",
    justifyContent: "center",
}

const internGridCenter = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "5px",
    justifyContent: "center",
}


export class LoginBlock extends React.Component<{}, ILoginBlockState> {

    constructor(props: any) {
        super(props);
        this.state = { username: "", password: "", id: -1 };
    }



    render() {
        return (
            <div style={externGridStyle}>
                <div style={internGridCenter}>
                    <Button text="Log in"/>
                    <Button
                        text="Sign in"
                        onClick={() => {
                            this.signIn(this.state.username, this.state.password)
                        }}
                    />
                </div>
                <div>
                    <Edit hint="username" handleChange={this.onUsernameChange} />
                </div>
                <div>
                    <Edit hint="password" isPassword={true} handleChange={this.onPasswordChange} />
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

    private signIn: (username: string, password: string) => void = (user: string, password: string) => {

        let myInit = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: user, password: password })
        };

        fetch("http://127.0.0.1:5000/api/users", myInit).then((result: any) => {
            result.json().then((json: { id: number }) => {
                this.setState({ id: json.id })
            });
        });
    }
}