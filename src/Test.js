import React from "react"

export class Test extends React.Component {

    constructor(props) {
        console.clear()
        console.log('constructor')
        super(props);
        this.state = {
            message: 0,
        }
    }


    buttonHandler = () => {
        this.setState((prevState) => {
            return {
                message: prevState.message + 1
            }
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return {
            message: props.message
        }
    }

    render() {
        return (
            <>
                {console.log('render')}
                <button onClick={this.buttonHandler}>
                    PUSH
                </button>
                <h1>{this.state.message}</h1>
            </>
        )
    }
}