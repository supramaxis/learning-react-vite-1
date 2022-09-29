import React from "react";
import "flowbite";
import "flowbite-react";
import { Accordion, Card, CardGroup, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import McSearch from "./McSearch";
export default function MCcards({ searchResults, mc }) {
  return (
    <>
      <Card className="mb-3 mt-20 h-100">
        {/* <Card.Img variant="top" src={mc.image} /> */}
        <Card.Body>
          <Card.Title>{mc.name}</Card.Title>
          <Card.Text>Minecraft ID Name: {mc.minecraft_id_name}</Card.Text>
          <Card.Text>Category: {mc.category}</Card.Text>
          <Card.Text>Is Stackable? {mc.stackable}</Card.Text>
          <Card.Text>Max Stack Size: {mc.max_stack_size}</Card.Text>
          {mc.durability ? (
            <Card.Text>Durability: {mc.durability}</Card.Text>
          ) : null}
          {mc.armor_points ? (
            <Card.Text>Armor: {mc.armor_points}</Card.Text>
          ) : null}
          {mc.armor_toughness ? (
            <Card.Text>Armor Toughness: {mc.armor_toughness}</Card.Text>
          ) : null}
          {mc.knockback_resistance ? (
            <Card.Text>
              Knockback Resistance: {mc.knockback_resistance}
            </Card.Text>
          ) : null}
          {mc.attack_damage ? (
            <Card.Text>Attack Damage: {mc.attack_damage}</Card.Text>
          ) : null}
          {mc.attack_speed ? (
            <Card.Text>Attack Speed: {mc.attack_speed}</Card.Text>
          ) : null}
          {mc.hunger_points ? (
            <Card.Text>Hunger Points: {mc.hunger_points}</Card.Text>
          ) : null}
          {mc.quality ? <Card.Text>Quality: {mc.quality}</Card.Text> : null}
        </Card.Body>
      </Card>

      {/* <Accordion key={minecraft.name}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{minecraft.name}</Accordion.Header>
          <Accordion.Body as="p" className="accordionBody">
            Minecraft ID Name: {minecraft.minecraft_id_name}
          </Accordion.Body>
          <Accordion.Body as="p" className="accordionBody">
            Category: {minecraft.category}
          </Accordion.Body>
          <Accordion.Body as="p" className="accordionBody">
            Is Stackable?: {minecraft.stackable}
          </Accordion.Body>
          <Accordion.Body as="p" className="accordionBody">
            Max Stack Size: {minecraft.max_stack_size}
          </Accordion.Body>
          {minecraft.durability ? (
            <AccordionBody as="p" className="accordionBody">
              Durability: {minecraft.durability}
            </AccordionBody>
          ) : null}
          {minecraft.attack_damage ? (
            <AccordionBody as="p" className="accordionBody">
              Attack Damage: {minecraft.attack_damage}
            </AccordionBody>
          ) : null}
          {minecraft.attack_speed ? (
            <AccordionBody as="p" className="accordionBody">
              Attack Speed: {minecraft.attack_speed}
            </AccordionBody>
          ) : null}
          {minecraft.armor_points ? (
            <AccordionBody as="p" className="accordionBody">
              Armor: {minecraft.armor_points}
            </AccordionBody>
          ) : null}
          {minecraft.armor_toughness ? (
            <AccordionBody as="p" className="accordionBody">
              Armor Thoughness: {minecraft.armor_toughness}
            </AccordionBody>
          ) : null}
          {minecraft.knockback_resistance ? (
            <AccordionBody as="p" className="accordionBody">
              Knockback Resistance: {minecraft.knockback_resistance}
            </AccordionBody>
          ) : null}
          {minecraft.hunger_points ? (
            <AccordionBody as="p" className="accordionBody">
              Hunger Points: {minecraft.hunger_points}
            </AccordionBody>
          ) : null}
          {minecraft.quality ? (
            <AccordionBody as="p" className="accordionBody">
              Quality: {minecraft.quality}
            </AccordionBody>
          ) : null}
        </Accordion.Item>
      </Accordion> */}
    </>
  );
}
