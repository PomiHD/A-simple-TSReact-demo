import img1 from "../../assets/react-core-concepts.png"
import "./Header.css"
import React from "react";

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

export function Header() {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <div>
            <header>
                {/*better practice: use import to refer to the image file*/}
                <img src={img1} alt="Stylized atom"/>
                <h1>React Essentials</h1>
                <p>
                    {description} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    );
}