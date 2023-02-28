import React from "react";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container>
        <Card className="mt-20">
          <h1>Account</h1>
          <Card.Body>
            <Card.Title>
              <h2>Profile</h2>
            </Card.Title>
            <Card.Text>Your email is: {user && user.email} </Card.Text>
            <Button onClick={handleLogout} variant="primary">
              Logout
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
