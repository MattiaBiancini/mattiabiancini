import {
  Avatar,
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
	  <Column>
		{projects.projects.map((project, index) => (
			<Column key={index}>
				<Row>
					<Heading as="h2">{project.title}</Heading>
					{project.technologies.map((tech, techIndex) => (
						<img key={techIndex} src={`/svg/${tech}.svg`} width={24} height={24} />
					))}
				</Row>
				<Text>{project.description}</Text>
			</Column>
		))}
	  </Column>
    </Column>
  );
}
