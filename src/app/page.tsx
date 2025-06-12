import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row } from "@/once-ui/components";

import { baseURL, routes } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-l">
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            {home.subline}
          </Text>
        </RevealFx>
        {home.featured && (
        <RevealFx fillWidth delay={0.2} horizontal="start" paddingTop="0" paddingBottom="32" paddingLeft="12">
          <Row horizontal="start" gap="m" style={{ alignItems: "center" }}>
            <Text>I am actually working on:</Text>
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              // href={home.featured.href}>
              >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </Row>
        </RevealFx>
        )}
        <RevealFx paddingTop="4" delay={0.2} horizontal="start">
          <Text wrap="balance" onBackground="neutral-weak" variant="body-default-m">
            I live my life following one simple rule:
          </Text>
        </RevealFx>
        <RevealFx fillWidth paddingTop="8" delay={0.3} horizontal="start" paddingLeft="12" paddingRight="12" paddingBottom="12">
          <Flex
            background="brand-weak"
            border="neutral-alpha-medium"
            radius="m-4"
            paddingX="12"
            paddingY="8"
            horizontal="center"
          >
            <Row>
              <code className="text-lg font-semibold">
                &#x301D;
              </code>
              <Text>
                <code className="text-lg font-semibold">
                  But if your dream still lives, if that castle still gleams 
                  just as brightly in your eyes then it is your obligation
                  to lay the stones that surround you now.&#x301E;
                </code> - Kentaro Miura
              </Text>
            </Row>
          </Flex>
        </RevealFx>
        <RevealFx fillWidth delay={0.2} horizontal="start">
          <Text variant="label-default-m" align="justify">
            I am driven by a constant pursuit of knowledge and a deep commitment to self-improvement. 
            As a mathematician and logical thinker, I approach challenges analytically 
            and always strive to find the most effective solutions. My strengths include 
            being a good organizer and a dedicated hard worker, qualities that allow me to 
            manage projects efficiently and see them through to completion. I thrive both as 
            a leader and as a team member, believing that collaboration and clear direction 
            are key to achieving great results. While I may initially come across as a bit reserved, 
            I value trust deeply and open up to those with whom I build genuine connections.
          </Text>
        </RevealFx>
        <RevealFx paddingTop="12" delay={0.2} horizontal="start">
          <Heading as="h2">
            Some of my interests
          </Heading>
        </RevealFx>
        <RevealFx paddingTop="8" delay={0.2} horizontal="start" paddingLeft="16" paddingRight="16">
          <Text onBackground="neutral-weak" variant="label-default-m" align="justify">
            If I am not working on my projects, you can find me either swimming in the pool,
            playing team-based games, or learning.
            <br />
            I was a competitive swimmer for 2 decades, and I still enjoy swimming regularly.
            Actually I am coaching a Milan swimming team with <a href="https://www.instagram.com/mattmillx/">Matteo Milli</a>
            . I always loved to compete and here I can transfer my passion for swimming to the younger generations.
            I think that sports in general are a great way to improve your mental and physical health,
            and I encourage everyone to find a sport they enjoy.
            <br />
            I also love cooking and trying out new recipes for healthy and delicious meals. 
            My favorite cuisine is Italian, and I enjoy experimenting with different pasta dishes.
            Of course, the best one is pasta with meat sauce.
          </Text>
        </RevealFx>
      </Column>
    </Column>
  );
}
