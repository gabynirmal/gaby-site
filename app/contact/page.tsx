"use client";

import { Flex, Text, Textarea, Input, Field, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import InfoButtons from "../InfoButtons";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitStatus("loading");
      try {
        console.log("Submitting form with values:", values);
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log("Response:", response.status, data);

        if (response.ok) {
          setSubmitStatus("success");
          resetForm();
          setTimeout(() => setSubmitStatus("idle"), 3000);
        } else {
          console.error("Error:", data.error);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus("idle"), 3000);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    },
  });

  return (
    <Flex
      id="gn-contact"
      px="20"
      py="10"
      alignItems="center"
      justifyContent="center"
      gap="20"
    >
      <InfoButtons direction="column" px="90px" />
      <form onSubmit={formik.handleSubmit}>
        <Flex direction="column" gap="4" minW="500px">
          <Field.Root required>
            <Field.Label textStyle="xl">
              Name <Field.RequiredIndicator />
            </Field.Label>
            <Input
              size="lg"
              borderRadius="xl"
              borderColor="var(--foreground)"
              placeholder="Gabriela Nirmal"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <Text color="red.500" textStyle="sm">
                {formik.errors.name}
              </Text>
            )}
          </Field.Root>
          <Field.Root required>
            <Field.Label textStyle="xl">
              Email <Field.RequiredIndicator />
            </Field.Label>
            <Input
              size="lg"
              borderRadius="xl"
              borderColor="var(--foreground)"
              placeholder="nirmal.g@northeastern.edu"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <Text color="red.500" textStyle="sm">
                {formik.errors.email}
              </Text>
            )}
          </Field.Root>
          <Field.Root required>
            <Field.Label textStyle="xl">
              Subject <Field.RequiredIndicator />
            </Field.Label>
            <Input
              size="lg"
              borderRadius="xl"
              borderColor="var(--foreground)"
              placeholder="What's Up?"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject && (
              <Text color="red.500" textStyle="sm">
                {formik.errors.subject}
              </Text>
            )}
          </Field.Root>
          <Field.Root required>
            <Field.Label textStyle="xl">
              Message <Field.RequiredIndicator />
            </Field.Label>
            <Textarea
              size="lg"
              borderRadius="xl"
              borderColor="var(--foreground)"
              placeholder="Hi I'd love to work with you Gaby! You're so cool, smart, and talented."
              h="300px"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <Text color="red.500" textStyle="sm">
                {formik.errors.message}
              </Text>
            )}
          </Field.Root>
          <Button
            size="lg"
            mt="4"
            bgColor="var(--link-hover)"
            color="var(--foreground)"
            borderRadius="xl"
            type="submit"
            disabled={submitStatus === "loading"}
            _hover={{
              bgColor: "var(--foreground)",
              color: "var(--link-hover)",
            }}
          >
            <Text textStyle="xl">
              {submitStatus === "loading"
                ? "Sending..."
                : submitStatus === "success"
                  ? "Sent ✓"
                  : submitStatus === "error"
                    ? "Failed"
                    : "Send"}
            </Text>
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
