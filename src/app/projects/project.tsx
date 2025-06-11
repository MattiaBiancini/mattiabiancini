"use client";

import {
  Avatar,
  Background,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Row,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, projects } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import OverlappingAvatars from "@/components/projects/OverlappingAvatars";
import { useEffect, useState } from "react";
import SmartImageWithHoverText from "@/components/SmartImageWithHoverText";

export default function Project() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`${baseURL}/og?title=${encodeURIComponent(projects.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column style={{ gap: "2em" }}>
        {projects.projects.map((project, index) => (
          <Column key={index} style={{ gap: "8px" }}>
            <Flex
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr auto" : "1fr auto 1fr",
                alignItems: "center",
              }}
            >
              <Flex style={{ justifySelf: "start" }}>
                <Heading as="h3" style={{ verticalAlign: "middle" }}>
                  {project.title}
                  {project.opensource && (
                    <>
                      &nbsp;[
                      <a href={project.link}>
                        <Icon
                          onBackground="neutral-strong"
                          name={project.icon}
                        />
                      </a>
                      ]
                    </>
                  )}
                </Heading>
              </Flex>

              {!isMobile && (
                <Flex style={{ justifySelf: "center" }}>
                  <Row style={{ gap: "1em" }}>
                    {project.technologies.map((tech, techIndex) => (
                      <SmartImageWithHoverText name={tech.name} link={tech.link} key={techIndex} />
                    ))}
                  </Row>
                </Flex>
              )}

              <Flex style={{ justifySelf: "end" }}>
                <OverlappingAvatars developers={project.developers} />
              </Flex>
            </Flex>

            {/* Mobile-only: technologies row below title */}
            {isMobile && (
              <Flex style={{ justifyContent: "start", marginTop: 8 }}>
                <Row style={{ gap: "1em" }}>
                  {project.technologies.map((tech, techIndex) => (
                      <SmartImageWithHoverText name={tech.name} link={tech.link} key={techIndex} />
                  ))}
                </Row>
              </Flex>
            )}

            <Text
              variant="heading-default-xs"
              onBackground="neutral-weak"
              align="justify"
            >
              {project.description}
            </Text>
          </Column>
        ))}
      </Column>
    </Column>
  );
}