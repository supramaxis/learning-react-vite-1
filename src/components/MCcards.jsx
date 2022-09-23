import React from "react";
import "flowbite";
import "flowbite-react";
import { Accordion, Card, CardGroup, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
export default function MCcards({ minecraft }) {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{minecraft.name}</Accordion.Header>
          <Accordion.Body>
            Minecraft ID Name: {minecraft.minecraft_id_name}
          </Accordion.Body>
          <Accordion.Body>Category: {minecraft.category}</Accordion.Body>
          <Accordion.Body>Is Stackable?: {minecraft.stackable}</Accordion.Body>
          <Accordion.Body>
            Max Stack Size: {minecraft.max_stack_size}
          </Accordion.Body>
          {minecraft.durability ? (
            <AccordionBody>Durability: {minecraft.durability}</AccordionBody>
          ) : null}
          {minecraft.attack_damage ? (
            <AccordionBody>
              Attack Damage: {minecraft.attack_damage}
            </AccordionBody>
          ) : null}
          {minecraft.attack_speed ? (
            <AccordionBody>
              Attack Speed: {minecraft.attack_speed}
            </AccordionBody>
          ) : null}
          {minecraft.armor_points ? (
            <AccordionBody>Armor: {minecraft.armor_points}</AccordionBody>
          ) : null}
          {minecraft.attack_speed ? (
            <AccordionBody>
              Attack Speed: {minecraft.attack_speed}
            </AccordionBody>
          ) : null}
        </Accordion.Item>
      </Accordion>

      {/* <Card className="mcCard" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{minecraft.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Minecraft ID Name: {minecraft.minecraft_id_name}
          </Card.Text>
          <Card.Text>Category: {minecraft.category}</Card.Text>
          <Card.Text>Is Stackable?: {minecraft.stackable}</Card.Text>
          <Card.Text>Max Stack Size: {minecraft.max_stack_size}</Card.Text>
        </Card.Body>
      </Card> */}

      {/* <CardGroup>
        <Card className="m-1">
          <Card.Body>
            <Card.Title>{minecraft.name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}

      {/* <Row xs={1} md={1} className="p-1">
        <Col>
          <Card className="mcCard">
            <Card.Body>
              <Card.Title>{minecraft.name}</Card.Title>
              <Card.Text>
                Minecraft ID Name: {minecraft.minecraft_id_name}
              </Card.Text>
              <Card.Text>Category: {minecraft.category}</Card.Text>
              <Card.Text>Is Stackable?: {minecraft.stackable}</Card.Text>
              <Card.Text>Max Stack Size: {minecraft.max_stack_size}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* <Row xs={1} md={1} className="g-4 p-1">
        <Col>
          <Card className="mcCard">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>{minecraft.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* <div className="flex justify-center items-center m-10">
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <>
            <div>
              <button
                data-popover-target="popover-default"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {mc.name}
              </button>
              <div
                data-popover
                id="popover-default"
                role="tooltip"
                className="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800  ">
                <div className="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Popover title
                  </h3>
                </div>
                <div className="py-2 px-3">
                  <p className="text-gray-900 dark:text-gray-100">
                    {mc.category}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    {mc.minecraft_id_name}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    {mc.stackable}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    {mc.max_stack_size}
                  </p>
                </div>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {mc.name}
              </p>
            </div>

            <div
              data-popover
              id="popover-default"
              role="tooltip"
              className="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
              <div className="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Popover title
                </h3>
              </div>
              <div className="py-2 px-3">
                <p>
                  And here's some amazing content. It's very engaging. Right?
                </p>
              </div>
              <div data-popper-arrow></div>
            </div>
            <button
              data-popover-target="popover-default"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {minecraft.name}
            </button>
          </>
        </div>
      </div> */}
    </>
  );
}
