import * as React from "react";
import { Login } from "./pages/Login";
import { MarinetPage } from "./pages/MarinetPage";

export interface IAppState {
    isLogged: boolean;
    isNewUser: boolean;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = { isLogged: false, isNewUser: false }
    }

    private onLogInClick: () => void = () => {
        this.setState({ isLogged: true })
    }

    private onSignInClick: () => void = () => {
        this.setState({ isLogged: true, isNewUser:true })
    }

    render() {
        return (
            this.state.isLogged ? 
            <MarinetPage isNewUser={this.state.isNewUser} /> : 
            <Login onLogInClick={this.onLogInClick} onSignInClick={this.onSignInClick}/>
        );
    }
}