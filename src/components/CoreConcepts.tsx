import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import React from "react";
import Section from "./Section";
export default function CoreConcepts() {
  return (
    <Section title={"Core Concepts"} id="core-concepts">
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

        {CORE_CONCEPTS.map((item) => (
          <CoreConcept
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
        {/*alternative way to achieve above*/}
        {/*{CORE_CONCEPTS.map((item) =>*/}
        {/*    <CoreConcept {...item}/>)}*/}
      </ul>
    </Section>
  );
}
