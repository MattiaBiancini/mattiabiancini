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
		<Row style={{ justifyContent: "space-between", alignItems: "middle" }}>
			<Heading as="h1">
				Performance Variability
			</Heading>
			<Text variant="heading-default-xs" onBackground="neutral-weak">
				Master Thesis
			</Text>
		</Row>
	  </Column>
	</Column>
  );
}