import * as React from "react";
import {IComment} from "../App";

export interface ICommentProps{
    comment:IComment;
}

export function Comment(props: ICommentProps){
    return(
        <h1>{props.comment.username+":"+props.comment.comment}</h1>
    );
}