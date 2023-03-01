import React from "react";
import ReactDOM from "react-dom";
import ClassGreeting from "./Classgreeting";

    function App() {
        return (
            <>
                <h1>Module 6 Labwork</h1>
                <ClassGreeting />
            </>
        )
    }

ReactDOM.render(
     <App />,
    document.getElementById("root")
);