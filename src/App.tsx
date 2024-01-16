import component from "./assets/components.png";
import {CORE_CONCEPTS} from "./data";
import {Header} from './components/Header/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react"; 
// 1. must call useSate() in component function 
// 2. must place on the top of component function
import React from "react";

console.log(typeof component)


function App() {
    let tabContent = "Please click a button";
    const [selectedTopic,setSelectedTopic] = useState("Please click a button");
    function handelSelect(selectBtn){
        setSelectedTopic(selectBtn)
        console.log(selectedTopic)
    }
    console.log("App component executing.")
    return (
        <div>
            {/*<Header></Header>*/}
            {/*<Header />*/}
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/*<CoreConcept */}
                        {/*    title="Compoent 1" */}
                        {/*    description="UI 1"*/}
                        {/*    image = {component}/>*/}
                        {/*<CoreConcept*/}
                        {/*    title="Compoent 2"*/}
                        {/*    description="UI 2"*/}
                        {/*    image = {component}/>*/}
                        {/*<CoreConcept*/}
                        {/*    title="Compoent 3"*/}
                        {/*    description="UI 3"*/}
                        {/*    image = {component}/>*/}
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}
                        />
                        <CoreConcept {...CORE_CONCEPTS[2]}
                        />
                        <CoreConcept {...CORE_CONCEPTS[3]}
                        />
                    </ul>
                </section>
                <section id ="examples">
                    <h2>
                        Examples
                    </h2>
                    <menu>
                        {/*Note here we use "()=>handelSelect("Components")".If only use "handelSelect("Components")", then*/}
                        {/*The issue with code is in the way the handelSelect function is being called */}
                        {/*on the onSelect event of the button. In its current state, */}
                        {/*the function is being executed immediately when the component is rendered,*/}
                        {/*not when the button is clicked. This causes the function to be called continuously */}
                        {/*in an infinite loop,*/}
                        {/*which is likely crashing the application.*/}
                        <TabButton onSelect={()=>handelSelect("Components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={()=>handelSelect("JSX")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={()=>handelSelect("Props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={()=>handelSelect("State")}>
                            State
                        </TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
