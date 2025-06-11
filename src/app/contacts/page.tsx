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
import { about, person, projects, contacts, social } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import styles from "@/components/about/about.module.scss";
import MailForm from "@/components/contacts/mail/mailform";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  });
}

export default function Contacts() {
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
			<Flex fillWidth mobileDirection="column" horizontal="center">
				<Column
					className={contacts.image}
					position="sticky"
					minWidth="160"
					paddingX="l"
					paddingBottom="xl"
					gap="m"
					flex={3}
					horizontal="center"
				>
					<Avatar src={contacts.image} size="xl" />
					<Flex gap="8" vertical="center">
						<Column>
							{contacts.contacts.map((item, index) => (
								<Flex key={index} gap="8" vertical="center">
									<Icon onBackground="accent-weak" name={item.icon} />
									<Text variant="body-default-s">{item.name}</Text>
								</Flex>
							))}
						</Column>
					</Flex>
				</Column>
				<Column className={styles.blockAlign} flex={9} maxWidth={40}>
					<MailForm />
				</Column>
			</Flex>
		</Column>
	);
}
