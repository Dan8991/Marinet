import * as React from "react";

export interface IEditState {
    value: string;
}

export interface IEditProps{
    hint?:string;
}

//basic input component
//TODO:add style

export class Edit extends React.Component<IEditProps, IEditState> {

    constructor(props: IEditProps) {
        super(props);
        this.state = { value: "" };
    }

    handleChange: (e: any) => void = (e: any) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return <input placeholder={this.props.hint||""} onChange={this.handleChange}></input>;
    }
}