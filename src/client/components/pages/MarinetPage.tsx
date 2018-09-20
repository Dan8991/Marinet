import * as React from "react";
import { CommentsInput } from "../basic_comp/CommentsInput";
import { Button } from "../basic_comp/Button";
import { IComment } from "../App";
import { Comment } from "../basic_comp/Comment"

export interface IMarinetPageProps {
    isNewUser: boolean;
    comments: IComment[];
    userId: number;
    onCommentPost: (comment: IComment) => void;
}

export interface IMarinetPageState {
    commentText: string;
    commentRef: any;
}

// const commentsInStyle = {
//     width:"100%",
//     height:"80px",
//     display: "flex",
//     justifyContent: "center",
// }

const btnPosStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const commentsInStyle = {
    width: "100%",
    height: "80px",
    display: "grid",
    gridTemplateColumns: "20% 60% 10% 10%",
}

export class MarinetPage extends React.Component<IMarinetPageProps, IMarinetPageState> {

    constructor(props: IMarinetPageProps) {
        super(props);
        this.state = { commentText: "", commentRef: null }
    }

    private onCommentChange: (e: any, val: any) => void = (e: any, val: any) => {
        this.setState({ commentText: e.target.value, commentRef: val })
    }

    private onPostCommentClick: () => void = () => {
        if (this.state.commentText != ""){
            let myInit = {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: this.props.userId, comment: this.state.commentText })
            };

            fetch("http://127.0.0.1:5000/api/comments", myInit).then((result: any) => {
                result.json().then((json: { comment: string, username: string }) => {
                    this.state.commentRef.value = "";
                    this.setState({ commentText: "" });
                    this.props.onCommentPost(json);
                });
            });
        } else {
            console.log("empty comment");
        }
    }

    render() {
        return (
            <div>
                <div style={commentsInStyle}>
                    <div />
                    <CommentsInput onChange={this.onCommentChange} />
                    <div style={btnPosStyle}>
                        <Button text='comment' onClick={this.onPostCommentClick} />
                    </div>
                </div>
                {this.props.comments.map((comment: IComment, index: number) => {
                    return <Comment comment={comment} key={index} />
                })}
            </div>
        );
    }
}