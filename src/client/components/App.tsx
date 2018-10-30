import * as React from "react";
import { MarinetPage } from "./pages/MarinetPage";
import { Login } from "./pages/Login";

export interface IComment {
    comment: string;
    username: string;
}

export interface IAppState {
    isLogged: boolean;
    isNewUser: boolean;
    comments: IComment[];
    userId: number;
}

const h1Style = {
    //workaround because textAlign:"center" is not working
    textAlign: "center" as "center",
    fontSize: "40px",
    color: "#087220"
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = { isLogged: false, isNewUser: false, comments: [], userId: -1 }
    }

    private onLogInClick: (userId: number) => void = (userId: number) => {
        this.setState({ isLogged: true, userId: userId })
        let myInit = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch("http://127.0.0.1:5000/api/comments", myInit).then((result: any) => {
            result.json().then((comments: IComment[]) => {
                this.setState({ comments: comments })
            });
        });
    }

    private onSignUpClick: (userId: number) => void = (userId: number) => {
        this.setState({ isLogged: true, isNewUser: true, userId: userId })
    }

    private onCommentPost: (comment: IComment) => void = (comment: IComment) => {
        const comments = this.state.comments;
        comments.unshift(comment);
        this.setState({ comments: comments });
    }

    render() {
        return (
            <div> 
                <div style={h1Style}>
                    <h1> Welcome to Marinet</h1>
                </div>
                {
                    this.state.isLogged ?
                        <MarinetPage
                            userId={this.state.userId}
                            isNewUser={this.state.isNewUser}
                            comments={this.state.comments}
                            onCommentPost={this.onCommentPost}
                        /> :
                        <Login
                            onLogInClick={this.onLogInClick}
                            onSignUpClick={this.onSignUpClick}
                        />
                }
            </div>
        );
    }
}
