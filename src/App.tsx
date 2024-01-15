import img1 from "./assets/react-core-concepts.png"
import component from "./assets/components.png"
import React from "react";
console.log(typeof component)

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


function Header() {
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

function CoreConcept({title, description, image }: { title: string; description: string ; image:string }) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>

    )
}

function App() {
    return (
        <div>
            {/*<Header></Header>*/}
            {/*<Header />*/}
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept 
                            title="Compoent 1" 
                            description="UI 1"
                            image = {component}/>
                        <CoreConcept
                            title="Compoent 2"
                            description="UI 2"
                            image = {component}/>
                        <CoreConcept
                            title="Compoent 3"
                            description="UI 3"
                            image = {component}/>
               </ul>
                </section>


            </main>
        </div>
    );
}

export default App;
