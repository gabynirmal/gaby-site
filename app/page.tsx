import { Box, Flex, Text, Icon, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import InfoButtons from "./InfoButtons";

export default function Home() {
  return (
    <Box id="gn-home" px="20" py="10">
      {/* Intro Para */}
      <Flex pt="200px" direction="column" gap="6">
        <Heading size="6xl">Welcome</Heading>
        <Text textStyle="xl" maxWidth="750px" borderLeft="4px solid" pl="4">
          I'm a <strong>Computer Science</strong> major with a concentration in{" "}
          <strong>AI</strong> and a minor in{" "}
          <strong>Global Fashion Studies</strong> at Northeastern University. I
          love working on projects that intertwine my passions for tech and
          fashion. I'm also a <strong>crochet designer</strong>, and am
          currently working on a web app that will help me create patterns for
          my custom designs!
        </Text>
      </Flex>
      <InfoButtons pt="8" />
    </Box>
  );
}
