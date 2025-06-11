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
  Input,
  Row,
  SmartImage,
  Tag,
  Text,
  Textarea,
} from "@/once-ui/components";
import { useForm, ValidationError } from '@formspree/react';

export default function MailForm() {
  const [state, handleSubmit] = useForm("mjkrwgnl");
  if (state.succeeded) {
      return <Text variant="body-default-m" onBackground="neutral-weak">Thank you for your message!</Text>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Column gap="m" margin="8" horizontal="end" fillWidth>
        <Input 
            id="email"
            type="email"
            name="email"
            label="Email Address"
          />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <Textarea
          id="message"
          name="message"
          label=""
          placeholder="Write your message here..."
          style={{ minHeight: "300px" }}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <Button
          type="submit"
          variant="secondary"
          size="m"
        > 
          Send Email
        </Button>
      </Column>
    </form>
  );
}