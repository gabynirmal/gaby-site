"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
// Adjust this path to wherever you save experience.json
import experience from "../data/experience.json";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <Box
      id="gn-experience"
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
        {/* Experience index */}
        <Box
          as="ul"
          flex="1"
          minW="0"
          w={{ base: "100%", lg: "auto" }}
          listStyleType="none"
          m="0"
          p="0"
          borderBottom="1px solid var(--line)"
        >
          {experience.map((job, i) => (
            <Box
              as="li"
              key={`${job.company}-${job.dates}`}
              pb="16"
              opacity={{ base: 1, lg: i === active ? 1 : 0.65 }}
              transition="opacity 0.25s ease"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              {/* Mobile only: the preview panel is hidden below lg */}
              {job.image && (
                <Image
                  src={`/experience/${job.image}`}
                  alt=""
                  display={{ base: "block", lg: "none" }}
                  w="100%"
                  objectFit="cover"
                  borderRadius="14px"
                  mb="5"
                />
              )}
              <Heading
                as="h2"
                fontSize={{ base: "4xl", xl: "5xl" }}
                lineHeight="1.08"
                letterSpacing="-0.025em"
                fontWeight="semibold"
                textWrap="balance"
              >
                {job.company}
              </Heading>
              <Text
                mt="4"
                color="var(--emphasis)"
                fontWeight="medium"
                fontSize={{ base: "xl", xl: "2xl" }}
              >
                {job.role}
              </Text>
              <Flex
                mt="1"
                gap="4"
                wrap="wrap"
                fontSize={{ base: "md", xl: "lg" }}
                opacity={0.7}
              >
                <Text>{job.dates}</Text>
                <Text>{job.location}</Text>
              </Flex>
              <Box
                as="ul"
                mt="8"
                p="0"
                maxW="40ch"
                listStyleType="none"
                display="flex"
                flexDirection="column"
                gap="5"
                fontSize={{ base: "lg", xl: "2xl" }}
                lineHeight="1.35"
                letterSpacing="-0.01em"
                fontWeight="medium"
              >
                {job.highlights.map((point) => (
                  <Box as="li" key={point}>
                    {point}
                  </Box>
                ))}
              </Box>
              <Text
                mt="8"
                fontSize={{ base: "md", xl: "lg" }}
                fontWeight="medium"
                opacity={0.7}
              >
                {job.techStack}
              </Text>
            </Box>
          ))}
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
            {experience.map((job, i) =>
              job.image ? (
                <Image
                  key={`${job.company}-${job.dates}`}
                  src={`/experience/${job.image}`}
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
              ) : (
                // Placeholder until you add an image for this job in the JSON
                <Box
                  key={`${job.company}-${job.dates}`}
                  gridArea="1 / 1"
                  alignSelf="start"
                  w="100%"
                  aspectRatio={4 / 3}
                  borderRadius="22px"
                  bgColor="var(--surface)"
                  border="1px solid var(--line)"
                  opacity={i === active ? 1 : 0}
                  transition="opacity 0.35s ease"
                />
              ),
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
