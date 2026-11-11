"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import * as db from "../data";

// Order here is the order the sections appear on the page.
const GROUPS = [
  { key: "frontend", label: "Frontend" },
  { key: "ml", label: "Machine Learning" },
];

export default function Projects() {
  const projects = db.projects;
  // `active` is an index into the full projects array, so the sticky
  // preview works across both sections.
  const [active, setActive] = useState(0);

  return (
    <Box
      id="gn-projects"
      px={{ base: 6, md: 10 }}
      pt={{ base: 12, lg: 18 }}
      pb="24"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="flex-start"
        gap={{ base: 0, lg: "80px" }}
      >
        {/* Project index, grouped by category */}
        <Box flex="1" minW="0" w={{ base: "100%", lg: "auto" }}>
          {GROUPS.map((group) => {
            const items = projects
              .map((project, i) => ({ project, i }))
              .filter(({ project }) => project.category === group.key);

            if (items.length === 0) return null;

            return (
              <Box as="section" key={group.key} mb="16" _last={{ mb: 0 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  fontWeight="medium"
                  mb="8"
                >
                  {group.label}
                </Heading>

                <Box
                  as="ul"
                  listStyleType="none"
                  m="0"
                  p="0"
                  borderBottom="1px solid var(--line)"
                >
                  {items.map(({ project, i }) => (
                    <Box
                      as="li"
                      key={project.title}
                      pb="16"
                      opacity={{ base: 1, lg: i === active ? 1 : 0.65 }}
                      transition="opacity 0.25s ease"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                    >
                      {/* Mobile only: the preview panel is hidden below lg */}
                      <Image
                        src={project.image}
                        alt=""
                        display={{ base: "block", lg: "none" }}
                        w="100%"
                        objectFit="cover"
                        borderRadius="14px"
                        mb="5"
                      />
                      <Heading
                        as="h3"
                        fontSize={{ base: "3xl", xl: "4xl" }}
                        lineHeight="1.08"
                        letterSpacing="-0.025em"
                        fontWeight="semibold"
                        textWrap="balance"
                      >
                        {project.title}
                      </Heading>
                      <Text
                        mt="3"
                        color="var(--emphasis)"
                        fontWeight="medium"
                        fontSize="md"
                      >
                        {project.techStack}
                      </Text>
                      {project.description && (
                        <Text
                          mt="3.5"
                          maxW="52ch"
                          fontSize="md"
                          lineHeight="1.6"
                          opacity={0.8}
                        >
                          {project.description}
                        </Text>
                      )}
                      <Flex gap="6" mt="5">
                        {project.vercelLink && (
                          <Link
                            href={project.vercelLink}
                            target="_blank"
                            className="text-link"
                          >
                            Live demo
                          </Link>
                        )}
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="text-link"
                        >
                          Code
                        </Link>
                      </Flex>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Sticky preview: desktop only, centered in the right column */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          flex="1"
          minW="0"
          justify="center"
          alignSelf="stretch"
        >
          <Box
            display="grid"
            w="100%"
            maxW="800px"
            position="sticky"
            top="10"
            alignSelf="flex-start"
            aria-hidden="true"
          >
            {projects.map((project, i) => (
              <Image
                key={project.title}
                src={project.image}
                alt=""
                gridArea="1 / 1"
                alignSelf="start"
                w="100%"
                h="auto"
                maxH="calc(100vh - 80px)"
                objectFit="contain"
                objectPosition="top center"
                borderRadius="22px"
                border="1px solid var(--line)"
                opacity={i === active ? 1 : 0}
                transition="opacity 0.35s ease"
              />
            ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
