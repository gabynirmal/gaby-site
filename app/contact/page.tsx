import { Flex, Text, Textarea, Input, Field, Button } from "@chakra-ui/react";
import InfoButtons from "../InfoButtons";

export default function Contact() {
  return (
    <Flex
      id="gn-contact"
      px="20"
      py="10"
      alignItems="center"
      justifyContent="center"
      gap="20"
    >
      <InfoButtons direction="column" px="90px" />
      <Flex direction="column" gap="4" minW="500px">
        <Field.Root required>
          <Field.Label textStyle="xl">
            Name <Field.RequiredIndicator />
          </Field.Label>
          <Input
            size="lg"
            borderRadius="xl"
            borderColor="var(--foreground)"
            placeholder="Gabriela Nirmal"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label textStyle="xl">
            Email <Field.RequiredIndicator />
          </Field.Label>
          <Input
            size="lg"
            borderRadius="xl"
            borderColor="var(--foreground)"
            placeholder="nirmal.g@northeastern.edu"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label textStyle="xl">
            Subject <Field.RequiredIndicator />
          </Field.Label>
          <Input
            size="lg"
            borderRadius="xl"
            borderColor="var(--foreground)"
            placeholder="What's Up?"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label textStyle="xl">
            Message <Field.RequiredIndicator />
          </Field.Label>
          <Textarea
            size="lg"
            borderRadius="xl"
            borderColor="var(--foreground)"
            placeholder="Hi I'd love to work with you Gaby! You're so cool, smart, and talented."
            h="300px"
          />
        </Field.Root>
        <Button
          size="lg"
          mt="4"
          bgColor="var(--link-hover)"
          color="var(--foreground)"
          borderRadius="xl"
          _hover={{
            bgColor: "var(--foreground)",
            color: "var(--link-hover)",
          }}
        >
          <Text textStyle="xl"> Send</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
