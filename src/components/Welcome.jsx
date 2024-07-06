import Alert from "react-bootstrap/Alert";
function Welcome() {
  return (
    <>
      <>
        {["dark"].map((variant) => (
          <Alert key={variant} variant={variant}>
            {"Benvenuti sul Nuovo E-book "}
          </Alert>
        ))}
      </>
    </>
  );
}

export default Welcome;