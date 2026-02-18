"use client";

import {
  Box,
  Flex,
  Text,
  Icon,
  Grid,
  GridItem,
  Card,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function Projects() {
  return (
    <Box id="gn-projects" px="20" py="10">
      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        <GridItem>
          <Card.Root
            role="group"
            maxW="xl"
            overflow="hidden"
            bgColor="var(--foreground)"
            color="var(--background)"
            borderRadius="30px"
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.1)"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 16px 24px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="crochet/dressCrochet.jpg"
              alt="Crochet Dress"
              maxHeight="600px"
            />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Ruffled Tiered Mini Dress
                  </Text>
                </Card.Title>
              </Box>
            </Card.Body>
            <Card.Footer gap="2" justifyContent="flex-end">
              <Flex
                as="button"
                alignItems="center"
                justifyContent="center"
                boxSize="50px"
                borderRadius="full"
                bgColor="var(--link-hover-opp)"
                color="var(--background)"
                _hover={{
                  bgColor: "var(--background)",
                  color: "var(--link-hover-opp)",
                }}
                transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
              >
                <Link
                  href="https://github.com/gabynirmal/zara-sales-analysis"
                  target="_blank"
                >
                  <Icon boxSize="2rem">
                    <FaInstagram />
                  </Icon>
                </Link>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root
            role="group"
            maxW="xl"
            overflow="hidden"
            bgColor="var(--foreground)"
            color="var(--background)"
            borderRadius="30px"
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.1)"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 16px 24px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="crochet/gdCrochet.jpg"
              alt="Green double couch with wooden legs"
              maxHeight="600px"
            />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Steal Your Face Sweater
                  </Text>
                </Card.Title>
              </Box>
            </Card.Body>
            <Card.Footer gap="2" justifyContent="flex-end">
              <Flex
                as="button"
                alignItems="center"
                justifyContent="center"
                boxSize="50px"
                borderRadius="full"
                bgColor="var(--link-hover-opp)"
                color="var(--background)"
                _hover={{
                  bgColor: "var(--background)",
                  color: "var(--link-hover-opp)",
                }}
                transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
              >
                <Link
                  href="https://github.com/gabynirmal/fabric-composition-detector"
                  target="_blank"
                >
                  <Icon boxSize="2rem">
                    <FaInstagram />
                  </Icon>
                </Link>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root
            maxW="xl"
            overflow="hidden"
            bgColor="var(--foreground)"
            color="var(--background)"
            borderRadius="30px"
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.1)"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 16px 24px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="crochet/set1Crochet.jpg"
              alt="Green double couch with wooden legs"
              maxHeight="600px"
            />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Tank & Mini Skirt Set
                  </Text>
                </Card.Title>
              </Box>
            </Card.Body>
            <Card.Footer gap="2" justifyContent="flex-end">
              <Flex
                as="button"
                alignItems="center"
                justifyContent="center"
                boxSize="50px"
                borderRadius="full"
                bgColor="var(--link-hover-opp)"
                color="var(--background)"
                _hover={{
                  bgColor: "var(--background)",
                  color: "var(--link-hover-opp)",
                }}
                transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
              >
                <Link
                  href="https://github.com/gabynirmal/kambaz-next-js"
                  target="_blank"
                >
                  <Icon boxSize="2rem">
                    <FaInstagram />
                  </Icon>
                </Link>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root
            maxW="xl"
            overflow="hidden"
            bgColor="var(--foreground)"
            color="var(--background)"
            borderRadius="30px"
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.1)"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "0 16px 24px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="crochet/pianoCrochet.jpg"
              alt="Green double couch with wooden legs"
              maxHeight="600px"
            />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Piano Skirt & Scarf
                  </Text>
                </Card.Title>
              </Box>
            </Card.Body>
            <Card.Footer gap="2" justifyContent="flex-end">
              <Flex
                as="button"
                alignItems="center"
                justifyContent="center"
                boxSize="50px"
                borderRadius="full"
                bgColor="var(--link-hover-opp)"
                color="var(--background)"
                _hover={{
                  bgColor: "var(--background)",
                  color: "var(--link-hover-opp)",
                }}
                transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
              >
                <Link
                  href="https://github.com/gabynirmal/kambaz-next-js"
                  target="_blank"
                >
                  <Icon boxSize="2rem">
                    <FaInstagram />
                  </Icon>
                </Link>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
      </Grid>
    </Box>
  );
}
