import React from "react";
import Calculate from "./Calculator";

class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "😊" : "😍"}
                </button>
                <Calculate />
            </>
        )
    }
}


export default Emoji;