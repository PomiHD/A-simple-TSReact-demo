export default function Tab({ children, buttons, ButtonContainer }) {
  // must start with capital
  // const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
