import React from "react";

export default function Tab({ children, buttons, ButtonContainer = "menu" }) {
  // must start with capital
  // const ButtonContainer = buttonContainer;
  return (
    <>
      {React.createElement(ButtonContainer, {}, buttons)}
      {children}
    </>
  );
}
