import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header";

export default function AboutMe() {
  return (
    <Flex as="main" h="100vh" alignItems="center" justifyContent="center">
      <Header title="About Me" />
    </Flex>
  );
}
