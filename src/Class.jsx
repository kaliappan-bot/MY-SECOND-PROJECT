import { Component } from "react";
class Class extends Component {
    constructor (props) {
        super(props);
        this.state = {
            first: 0,
            second: 100,
        };
    }
    render() {
     return (
        <>
        <h1>Class</h1>
        <h1>First: {this.state.first}</h1>
        <h1>Second: {this.state.second}</h1>
        <button onClick={() => this.setState({ first: this.state.first + 1})}>Add First</button>
        <button onClick={() => this.setState({ second: this.state.second + 1})}>Add Second</button>
        </>
    );
}
}
export default Class;