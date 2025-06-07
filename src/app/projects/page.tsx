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

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  });
}

export default function Project() {
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
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          <Flex style={{ justifySelf: 'start' }}>
            <Heading as="h3" style={{ verticalAlign: "middle" }}>
            {project.title}
            {project.opensource && (
              <>
                &nbsp;[<a href={project.link}>
                  <Icon onBackground="neutral-strong" name={project.icon} />
                </a>]
              </>
            )}
            </Heading>
          </Flex>
          <Flex style={{ justifySelf: 'center' }}>
            <Row style={{ gap: "1em" }}>
              {project.technologies.map((tech, techIndex) => (
                <Flex
                  key={techIndex}
                  background="info-strong"
                  border="neutral-alpha-medium"
                  radius="m-4"
                  shadow="l"
                  padding="4"
                  horizontal="center"
                >
                  <a href={tech.link} style={{ width: 24, height: 24 }}>
                    <img
                      src={`/svg/${tech.name}.svg`}
                      width={24}
                      height={24}
                    />
                  </a>
                </Flex>
              ))}
            </Row>
          </Flex>
          <Flex style={{ justifySelf: 'end' }}>
            <OverlappingAvatars developers={project.developers} />
          </Flex>
        </Flex>
				<Row style={{ alignItems: "center", justifyContent: "space-between" }}>
				</Row>
				<Text variant="heading-default-xs" onBackground="neutral-weak">{project.description}</Text>
			</Column>
		))}
	  </Column>
    </Column>
  );
}