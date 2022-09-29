import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";

export default function GvwCards({ gvw }) {
  return (
    <>
      <Card className="mb-3 mt-20 h-100">
        <Card.Img variant="top" src={gvw.image} />
        <Card.Body>
          <Card.Title>{gvw.title}</Card.Title>
          <Card.Text>{gvw.description}</Card.Text>
          <Card.Text>{gvw.instructions}</Card.Text>
          <Card.Text>Type: {gvw.type}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex flex-column">
          <a
            className="btn btn-primary mt-auto"
            href={gvw.open_giveaway_url}
            target="_blank">
            View
          </a>
        </Card.Body>
      </Card>

      {/* <Accordion>
        <Row>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Img src={gvw.image} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>{gvw.description}</Card.Text>
                <Card.Text>{gvw.instructions}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Accordion.Item eventKey="0">
          <Accordion.Header>{gvw.title}</Accordion.Header>
          <Accordion.Body as="p" className="accordionBody">
            {gvw.description}
          </Accordion.Body>
          <Accordion.Body as="p" className="accordionBody">
            {gvw.instructions}
          </Accordion.Body>
          <Accordion.Body as="p" className="accordionBody">
            <div className="flex justify-center items-center">
              <a
                className=" text-lg no-underline"
                href={gvw.open_giveaway_url}
                target="_blank">
                View
              </a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </>
  );
}
