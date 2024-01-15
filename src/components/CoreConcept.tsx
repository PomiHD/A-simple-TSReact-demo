import React from "react";

export default function CoreConcept({title, description, image}: { title: string; description: string; image: string }) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>

    )
}