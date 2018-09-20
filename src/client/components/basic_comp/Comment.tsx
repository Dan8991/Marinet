import * as React from "react";
import {IComment} from "../App";

export interface ICommentProps{
    comment:IComment;
}

const boxStyle = {
    width: "50%",
    display: "grid",
    gridRowsTemplate:"auto auto",
    backgroundColor: "#99ef43",
    justifyContent: "left",
    // boxShadow: "5px 3px grey",
    margin: "15px 0 15px 0",
    borderColor: "grey",
    borderStyle: "outset",
    borderRadius: "10px",
    padding:"0px 20px 0px 20px"
}

const usernameStyle = {
    fontFamily: "Arial",
    color: "#087220",
    fontSize: "28px",
}

const commentStyle = {
    fontFamily: "Times New Roman",
    fontSize: "20px",
}

export function Comment(props: ICommentProps){
    return(
        <div style={boxStyle}>
            <h1 style={usernameStyle}>{props.comment.username}</h1>
            <h1 style={commentStyle}>{props.comment.comment}</h1>
        </div>
    );
}