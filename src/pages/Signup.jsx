import { Container } from "react-bootstrap";
import SignUp from "../components/auth/SignUp";

export default function Signup() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container>
  );
}
