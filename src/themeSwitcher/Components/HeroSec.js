import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSec =()=> {
    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]

    return (
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currectTheme.backgroundColor}`,
            color: `${currectTheme.textColor}`
        }}
        >
            <h1>Context API theme toggler</h1>
            <button
            style={{
                backgroundColor: "#26ae60",
                padding: "150px",
                border: `${currectTheme.border}`
            }}>Click Me</button>
        </div>
    )
}

export default HeroSec;