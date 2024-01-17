import TabButton from "./TabButton";
import React, { useState } from "react";
import { EXAMPLES } from "../data-with-examples";

// Define the type for the EXAMPLES keys, if it's not already defined
type ExampleKey = keyof typeof EXAMPLES;
export default function Examples() {
  let tabContent = <p>Please select a topic.</p>;
  // const [selectedTopic, setSelectedTopic] = useState();
  // Explicitly define the type of selectedTopic as ExampleKey or undefined,
  // state can be either a value of type ExampleKey or undefined
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey | undefined>();

  function handelSelect(selectBtn) {
    debugger;
    setSelectedTopic(selectBtn);
    console.log(selectedTopic);
  }

  console.log("App component executing.");

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/*Note here we use "()=>handelSelect("Components")".If only use "handelSelect("Components")", then*/}
        {/*The issue with code is in the way the handelSelect function is being called */}
        {/*on the onSelect event of the button. In its current state, */}
        {/*the function is being executed immediately when the component is rendered,*/}
        {/*not when the button is clicked. This causes the function to be called continuously */}
        {/*in an infinite loop,*/}
        {/*which is likely crashing the application.*/}
        <TabButton
          isSelected={selectedTopic == "components"}
          onSelect={() => handelSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "jsx"}
          onSelect={() => handelSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "props"}
          onSelect={() => handelSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "state"}
          onSelect={() => handelSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
