import './App.css';
import React, {Fragment} from "react";
import {Test} from "./Test";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    increment = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value + 1
            }
        })
    }
    render() {
        return (
            <Fragment>
                <Test message={this.state.value}/>
                <button onClick={this.increment}> App button</button>
            </Fragment>
        )
    }

}

export default App;
