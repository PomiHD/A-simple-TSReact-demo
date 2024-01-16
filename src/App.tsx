import component from "./assets/components.png";
import {CORE_CONCEPTS} from "./data";
import {Header} from './components/Header/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import React, {useState} from "react";
import {EXAMPLES} from "./data-with-examples";
// 1. must call useSate() in component function 
// 2. must place on the top of component function

console.log(typeof component)

// Define the type for the EXAMPLES keys, if it's not already defined
type ExampleKey = keyof typeof EXAMPLES;

function App() {

    // const [selectedTopic, setSelectedTopic] = useState();
    // Explicitly define the type of selectedTopic as ExampleKey or undefined,
    // state can be either a value of type ExampleKey or undefined
    const [selectedTopic, setSelectedTopic] = useState<ExampleKey | undefined>();

    function handelSelect(selectBtn) {
        setSelectedTopic(selectBtn)
        console.log(selectedTopic)
    }

    console.log("App component executing.")
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>
                {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
                {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
        </div>)
    }
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

                        {/*<CoreConcept*/}
                        {/*    title={CORE_CONCEPTS[0].title}*/}
                        {/*    description={CORE_CONCEPTS[0].description}*/}
                        {/*    image={CORE_CONCEPTS[0].image}*/}
                        {/*/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[1]}*/}
                        {/*/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[2]}*/}
                        {/*/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[3]}*/}
                        {/*/>*/}

                        {CORE_CONCEPTS.map((item) =>
                            <CoreConcept key ={ item.title}
                                title={item.title} 
                                description={item.description} 
                                image={item.image}/>)}
                        {/*alternative way to achieve above*/}
                        {/*{CORE_CONCEPTS.map((item) =>*/}
                        {/*    <CoreConcept {...item}/>)}*/}
                        
                    </ul>
                </section>
                <section id="examples">
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
                        <TabButton isSelected={selectedTopic == "components"}
                                   onSelect={() => handelSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic == "jsx"} onSelect={() => handelSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic == "props"} onSelect={() => handelSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic == "state"} onSelect={() => handelSelect("state")}>
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
