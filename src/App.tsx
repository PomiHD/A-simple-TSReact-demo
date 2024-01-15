import img1 from  "./assets/react-core-concepts.png"

import React from "react";

function Header() {
    return (
        <div>
            <header>
                <img src={img1} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    Fundamental React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    );
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
