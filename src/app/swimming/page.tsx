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

export default function Swimming() {
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
				<Text variant="heading-default-l" onBackground="neutral-weak">
					WIP
				</Text>
			</Column>
		</Column>
	);
}