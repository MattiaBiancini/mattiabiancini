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
import styles from "./SmartImageWithHoverText.module.scss";

export default function SmartImageWithHoverText(item: { name: string; link: string }, index: number) {
  return (
    <Flex
			key={index}
			background="info-strong"
			border="neutral-alpha-medium"
			radius="m-4"
			shadow="l"
			padding="4"
			horizontal="center"
			className={styles.wrapper}
		>
			<a href={item.link} style={{ width: 24, height: 24 }}>
				<img
					src={`/svg/${item.name}.svg`}
					alt={item.name}
					width={24}
					height={24}
					className={styles.image}
				/>
			</a>
      <span className={styles.hoverText}>
				<Flex
					background="overlay"
					radius="m-4"
					paddingX="4"
					horizontal="center"
				>
					<Text variant="body-default-m" onBackground="neutral-weak">
						{item.name}
					</Text>
				</Flex>
			</span>
		</Flex>
  );
}