import React from 'react';
import '../App.css';

function ChangeModeButton() {
    let clickedState = "clicked";
    const body = document.body;
    const lightMode = "light";
    const darkMode = "dark";
    let mode = localStorage.getItem("mode");

    if (mode === lightMode || mode === darkMode) {
        body.classList.add(mode);
    } else {
        body.classList.add(lightMode);
    }

    const switchMode = (e) => {
        if (mode === darkMode) {
            body.classList.replace(darkMode, lightMode);
            e.target.classList.remove(clickedState);
            localStorage.setItem("mode", "light");
            mode = lightMode
        } else {
            body.classList.replace(lightMode, darkMode);
            e.target.classList.add(clickedState);
            localStorage.setItem("mode", "dark");
            mode = darkMode;
        }
    }

    return (
        <div>
            <button 
            className={mode === "dark" ? clickedState : ""}
            onClick={(e) => switchMode(e)}
            >
                Change mode
            </button>
        </div>
    )
}

export default ChangeModeButton
