import { Heading, Flex, Box } from "@chakra-ui/react";
import { nameColors } from "../lib/constants";
import Link from "next/link";

export default function Home() {
  const name = "GABRIELA NIRMAL";
  const namePaths: Record<string, string> = {
    G: "/greetings",
    A: "/about-me",
    B: "TBD",
    R: "/resume",
    I: "TBD",
    E: "TBD",
    L: "/lookbook",
    N: "/network",
    M: "/music-i-like",
  };
  return (
    <Flex as="main" h="100vh" alignItems="center" justifyContent="center">
      {name.split("").map((letter, idx) =>
        letter === " " ? (
          <Box key={idx} minWidth="2rem" />
        ) : (
          <Link key={idx} href={namePaths[letter]}>
            <Heading
              as="h1"
              fontSize="7xl"
              fontWeight="bold"
              fontFamily="kablammo-variable"
              letterSpacing=".25rem"
              fontVariationSettings={`'MORF' ${0}`}
              color={nameColors[letter]}
              transition={"font-variation-settings 500ms ease"}
              _hover={{ fontVariationSettings: `'MORF' ${60}` }}
              cursor="pointer"
            >
              {letter}
            </Heading>
          </Link>
        )
      )}
    </Flex>
  );
}
