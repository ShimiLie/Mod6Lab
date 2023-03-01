import React from "react";
import ReactDOM from "react-dom";
import ClassGreeting from "./ClassGreeting";
import Emoji from "./Emoji";

    function App() {
        return (
            <>
                <h1>Module 6 Labwork</h1>
                <ClassGreeting name="Anthony" />
                <Emoji />
            </>
        )
    }

ReactDOM.render(
     <App />,
    document.getElementById("root")
);