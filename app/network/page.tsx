import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header";

export default function Network() {
  return (
    <Flex as="main" h="100vh" alignItems="center" justifyContent="center">
      <Header title="Network" />
    </Flex>
  );
}
