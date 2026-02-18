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

export default function Projects() {
  return (
    <Box id="gn-projects" px="20" py="10">
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <GridItem>
          <Card.Root
            role="group"
            maxW="2xl"
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
            <Image src="/zara-dark.jpg" alt="Zara Logo" maxHeight="350px" />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Zara Sales Analysis
                  </Text>
                </Card.Title>
                <Text textStyle="lg" fontWeight="medium" mt="2">
                  Python, NumPy, Pandas
                </Text>
              </Box>
              <Card.Description>
                <Text
                  textStyle="lg"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                  color="var(--link-hover)"
                >
                  Predictive machine learning model that forecasts item
                  profitability based on features like seasonality, promotional
                  status, and in-store placement.
                </Text>
              </Card.Description>
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
                    <IoLogoGithub />
                  </Icon>
                </Link>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root
            role="group"
            maxW="2xl"
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
              src="ibtcc-cover.jpg"
              alt="Green double couch with wooden legs"
              maxHeight="350px"
            />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Image-Based Textile Composition Classifier
                  </Text>
                </Card.Title>
                <Text textStyle="lg" fontWeight="medium" mt="2">
                  Python, PyTorch, Numpy
                </Text>
              </Box>
              <Card.Description>
                <Text
                  textStyle="lg"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                  color="var(--link-hover)"
                >
                  ResNet-50-based Convolutional Neural Network which classifies
                  fabric compositions from high-resolution clothing images.
                </Text>
              </Card.Description>
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
                    <IoLogoGithub />
                  </Icon>
                </Link>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root
            maxW="2xl"
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
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              maxHeight="350px"
            />
            <Card.Body gap="3">
              <Box>
                <Card.Title>
                  <Text textStyle="3xl" mt="2">
                    Canvas Recreation
                  </Text>
                </Card.Title>
                <Text textStyle="lg" fontWeight="medium" mt="2">
                  TypeScript, React, Bootstrap
                </Text>
              </Box>
              <Card.Description>
                <Text
                  textStyle="lg"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                  color="var(--link-hover)"
                >
                  A recreation of Canvas for teachers
                </Text>
              </Card.Description>
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
                  href="https://kambaz-next-js-git-a3-gabriela-nirmals-projects.vercel.app/account/signin"
                  target="_blank"
                >
                  <Icon boxSize="1.85rem" transform="translateY(-2px)">
                    <IoLogoVercel />
                  </Icon>
                </Link>
              </Flex>
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
                    <IoLogoGithub />
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
