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
import { IoLogoGithub } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import * as db from "../data";
import { useRef, useState, useEffect } from "react";

export default function Projects() {
  const projects = db.projects;
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [singleLineMap, setSingleLineMap] = useState<boolean[]>(() =>
    Array(projects.length).fill(false),
  );

  useEffect(() => {
    const observers: ResizeObserver[] = [];

    titleRefs.current.forEach((el, i) => {
      if (!el) return;

      const check = () => {
        const lh = parseFloat(getComputedStyle(el).lineHeight);
        setSingleLineMap((prev) => {
          const next = [...prev];
          next[i] = el.offsetHeight <= lh + 1;
          return next;
        });
      };

      check();
      const observer = new ResizeObserver(check);
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [projects.length]);

  return (
    <Flex id="gn-projects" px="20" py="10" justifyContent="center">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        justifyContent="space-between"
        gap="40px"
      >
        {projects.map((project, i) => (
          <GridItem key={project.title} w="100%">
            <Card.Root
              w="100%"
              mx="auto"
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
                src={project.image}
                alt={project.title}
                maxHeight="350px"
                objectFit="cover"
              />
              <Card.Body gap="3">
                <Box>
                  <Card.Title
                    ref={(el) => {
                      titleRefs.current[i] = el;
                    }}
                    textStyle="3xl"
                  >
                    {project.title}
                  </Card.Title>
                  <Text textStyle="lg" fontWeight="medium" mt="2">
                    {project.techStack}
                  </Text>
                  {singleLineMap[i] && <Text h="1lh" textStyle="3xl" />}
                </Box>
                <Card.Description
                  textStyle="lg"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                  color="var(--link-hover)"
                  minH="4lh"
                >
                  {project.description}
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2" justifyContent="flex-end">
                {project.vercelLink && (
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
                    <Link href={project.vercelLink} target="_blank">
                      <Icon boxSize="1.85rem" transform="translateY(-2px)">
                        <IoLogoVercel />
                      </Icon>
                    </Link>
                  </Flex>
                )}
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
                  <Link href={project.githubLink} target="_blank">
                    <Icon boxSize="2rem">
                      <IoLogoGithub />
                    </Icon>
                  </Link>
                </Flex>
              </Card.Footer>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
