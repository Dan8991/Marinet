import * as React from "react";

export interface IStateEdit {
    value: string;
}

export interface IPropsEdit{
    hint?:string;
}

//basic input component
//TODO:add style

export class Edit extends React.Component<IPropsEdit, IStateEdit> {

    constructor(props: any) {
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