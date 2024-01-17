import component from "./assets/components.png";
import {Header} from './components/Header/Header'
// 1. must call useSate() in component function 
// 2. must place on the top of component function
import React, {Fragment} from "react";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

// console.log(typeof component)


function App() {


    return (
        <>
            {/*<Header></Header>*/}
            {/*<Header />*/}
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;
