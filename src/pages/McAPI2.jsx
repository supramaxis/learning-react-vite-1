import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import McCards from '../components/McCards';
import { useItems } from '../context/ItemsContext';
import McModal from '../components/McModal';
import { supabase } from '../supabase/client';

function McAPI2() {
  const { items, getItems } = useItems();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false)

  // useEffect( () => {
  //   const usr = supabase.auth.getUser();
  //   setUser(usr);
  //   console.log(usr);
  // }, []);

  useEffect(() => {
    getItems()
  }, []);

  return (
    <>
      <div>
        <h1 className='main-container'>MC Items</h1>
        <Container className='w-70'>
          <Row className='gy-3'>
            {items.map(item => (
              <Col md={3} xs={6} key={item.id}>
                <McCards item={item} />
              </Col>
            ))}
          </Row>
        </Container>
            
      </div>
    </>
  );
}

export default McAPI2;

