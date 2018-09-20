import * as React from "react";

const textAreaStyle = {
    resize: "none" as "none",
    height: "90%",
    width: "100%",
    boxShadow: "3px 3px 2px grey",
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: "18px",
}

export interface ICommentsInputProps {
    onChange?: (e: any, ref:any) => void;
}

export function CommentsInput(props: ICommentsInputProps) {
    let commentRef:any = null;

    return (
        <textarea ref={(ref) => commentRef = ref} onChange={(e:any) => props.onChange(e,commentRef)} style={textAreaStyle} />
    );
}