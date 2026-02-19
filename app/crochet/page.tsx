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
import * as db from "../data";

export default function Projects() {
  const crochet = db.crochet;
  return (
    <Box id="gn-projects" px="20" py="10">
      <Grid
        templateColumns={{
          base: "repeat(1, fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap="40px"
      >
        {crochet.map((item) => (
          <GridItem key={item.title}>
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
                src={`crochet/${item.image}`}
                alt="Crochet Dress"
                width="100%"
                height="500px"
              />
              <Card.Body gap="3">
                <Box>
                  <Card.Title textStyle="3xl" minH="2lh">
                    {item.title}
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
                  <Link href={item.link} target="_blank">
                    <Icon boxSize="2rem">
                      <FaInstagram />
                    </Icon>
                  </Link>
                </Flex>
              </Card.Footer>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
