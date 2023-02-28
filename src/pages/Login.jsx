import React from "react";
import { Container } from "react-bootstrap";
import LoginC from "../components/auth/LoginC";

export default function Login() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <LoginC />
      </div>
    </Container>
  );
}
