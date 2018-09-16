import * as React from "react";
import { CommentsInput } from "../basic_comp/CommentsInput";

export interface IMarinetPageProps {
    isNewUser: boolean
}

const commentsInStyle = {
    width:"100%",
    height:"80px",
    display: "flex",
    justifyContent: "center",
}

export class MarinetPage extends React.Component<IMarinetPageProps, {}> {

    constructor(props: IMarinetPageProps) {
        super(props);
    }

    render() {
        return(
            <div style={commentsInStyle}> 
                <CommentsInput/>
            </div>
        );
    }
}