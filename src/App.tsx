import component from "./assets/components.png";
import {CORE_CONCEPTS} from "./data";
import {Header} from './components/Header/Header'
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import React from "react";

console.log(typeof component)


function App() {
    function handelSelect(selectBtn){
        console.log(selectBtn)
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
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
