import React from "react";
import "flowbite";
import "flowbite-react";
import { Accordion, Card, CardGroup, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
export default function MCcards({ minecraft }) {
  return (
    <>
      <Accordion key={minecraft.name}>
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
      </Accordion>
    </>
  );
}
