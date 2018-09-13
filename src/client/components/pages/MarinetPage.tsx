import * as React from "react";

export interface IMarinetPageProps {
    isNewUser: boolean
}

export class MarinetPage extends React.Component<IMarinetPageProps, {}> {

    constructor(props: IMarinetPageProps) {
        super(props);
    }

    render() {
        return this.props.isNewUser ? "hello new user" : "hello user";
    }
}