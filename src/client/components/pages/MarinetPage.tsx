import * as React from "react";
import { CommentsInput } from "../basic_comp/CommentsInput";
import { Button } from "../basic_comp/Button";
import { IComment } from "../App";
import {Comment} from "../basic_comp/Comment"

export interface IMarinetPageProps {
    isNewUser: boolean;
    comments: IComment[];
}

// const commentsInStyle = {
//     width:"100%",
//     height:"80px",
//     display: "flex",
//     justifyContent: "center",
// }

const btnPosStyle = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const commentsInStyle = {
    width:"100%",
    height:"80px",
    display: "grid",
    gridTemplateColumns:"20% 60% 10% 10%",
}

export class MarinetPage extends React.Component<IMarinetPageProps, {}> {

    constructor(props: IMarinetPageProps) {
        super(props);
    }

    render() {
        return(
            <div>
                <div style={commentsInStyle}>
                    <div/>
                    <CommentsInput/>
                    <div style={btnPosStyle}>
                        <Button onClick={()=>{}}/>
                    </div>
                </div>
                {this.props.comments.map((comment:IComment)=>{
                    return <Comment comment={comment}/>
                })}
            </div>
        );
    }
}