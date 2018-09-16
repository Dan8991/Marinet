import * as React from "react";

const textAreaStyle = {
    resize: "none" as "none",
    height:"90%",
    width:"50%",
    boxShadow:"3px 3px 2px grey",
    fontFamily:'"Times New Roman", Times, serif',
    fontSize:"18px",
}

export function CommentsInput(props: any) {
    return (
        <textarea style={textAreaStyle}/>
    );
}