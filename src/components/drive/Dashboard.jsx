import React from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import { FoldenButton } from "./FoldenButton";

export const Dashboard = () => {
  const { folder } = useFolder("WoSD9upZzpc5qwnR8wWa");
  return (
    <>
      <Container fluid>
        <h1>Dashboard</h1>
        <FoldenButton currentFolder={folder} />
      </Container>
    </>
  );
};
