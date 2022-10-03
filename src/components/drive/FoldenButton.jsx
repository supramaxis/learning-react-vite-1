import { Button } from "flowbite-react";
import React, { useState } from "react";
import { MdUploadFile } from "react-icons/md";
import "flowbite-react/";
import { Form, Modal } from "react-bootstrap";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";

export const FoldenButton = ({ currentFolder }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [folderName, setFolderName] = useState("");
  const foldersCollectionRef = collection(db, "folders");
  const filesCollectionRef = collection(db, "files");

  const { user } = UserAuth();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setFolderName(e.target.value);
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      if (currentFolder === null) return;

      await addDoc(foldersCollectionRef, {
        name: folderName,
        userId: user.uid,
        createdAt: new Date(),
        parentId: currentFolder.id
      });
      setName("");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  // const createFolder = async () => {
  //   try {
  //     await addDoc(foldersCollectionRef, {
  //       name: folderName
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button gradientDuoTone="pinkToOrange" onClick={handleOpen}>
        <MdUploadFile />
      </Button>
      <Modal show={open} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control type="text" required onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Create Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
