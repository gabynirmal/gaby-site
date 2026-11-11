import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import InfoButtons from "./InfoButtons";
import PatternGrid from "./PatternGrid";

export default function Home() {
  return (
    <Box
      id="gn-home"
      px={{ base: 6, md: 10 }}
      pt={{ base: 12, lg: 20 }}
      pb="24"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align={{ base: "flex-start", lg: "center" }}
        gap={{ base: 12, lg: "80px" }}
      >
        {/* Intro */}
        <Flex direction="column" gap="6" flex="1" minW="0">
          <Heading size="6xl">Welcome</Heading>
          <Text textStyle="xl" maxWidth="750px" borderLeft="4px solid" pl="4">
            I'm a <strong>Computer Science</strong> major with a concentration
            in <strong>AI</strong> and a minor in{" "}
            <strong>Global Fashion Studies</strong> at Northeastern University.
            I love working on projects that intertwine my passions for tech and
            fashion. I'm also a <strong>crochet designer</strong>, and am
            currently working on a web app that will help me create patterns for
            my custom designs!
          </Text>
          <InfoButtons pt="2" />
        </Flex>

        {/* Interactive pattern grid: right half, centered within it */}
        <Flex flex="1" minW="0" w="100%" justify="center">
          <Box w="100%" maxW={{ base: "440px", lg: "520px" }}>
            <PatternGrid />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
