import React from "react";

//Lab6.1 Class component

class ClassGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name : "World"}
        this.Change = this.Change.bind(this);
    }

    Change() {
        this.setState({ name: "Anthony"})
    }
 

    render() {
        return (
            <>
                <h2>Lab6.1.1</h2>
                <p>Hello {this.props.name}!</p>
                <p>Hello {this.state.name}!</p>
                <button onClick={this.Change} >Change</button>
                
            </>
        )        
    }
}


export default ClassGreeting;
