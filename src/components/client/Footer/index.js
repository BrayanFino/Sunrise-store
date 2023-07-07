import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import { BiPhoneIncoming } from "react-icons/bi";
import { CiClock1, CiLocationOn, CiMail } from "react-icons/ci";
import { Fragment, useContext } from "react";
import { LoginContext } from "@/context/login";
import { FooterLinks } from "../FooterLinks";

export const Footer = () => {
  const information = {
    title: "Infomation",
    links: [
      { title: "About Us", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "FAQs", href: "#" },
    ],
  };

  const usefulLinks = {
    title: "Useful Links",
    links: [
      { title: "Terms & Conditions", href: "#" },
      { title: "Returns & Exchanges", href: "#" },
      { title: "Shipping & Delivery", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  };

  const contactsLinks = {
    title: "Contact Us",
    links: [
      {
        title: "Ukraine, Kyiv,Khreshchatyk 1",
        href: "#",
        icon: BiPhoneIncoming,
      },
      { title: "+38 (050) 12 34 567", href: "#", icon: CiLocationOn },
      { title: "All week 24/7", href: "#", icon: CiClock1 },
      { title: "mail@company.com", href: "#", icon: CiMail },
    ],
  };

  const { localSession } = useContext(LoginContext);

  return (
    <Fragment>
      {localSession?.rolId !== "ae8b3d2d-3dac-4fe1-9d3d-f2f91661de47" && (
        <Box w="100%" as="footer">
          <Box bgColor="black">
            <Container
              py="1rem"
              as={Flex}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                color="white"
                textTransform="uppercase"
                fontSize={{ base: "xs", sm: "sm" }}
              >
                Be in touch with us:
              </Text>
              <Flex gap="1rem">
                <Input
                  placeholder="Enter your email"
                  border="0"
                  bgColor="gray.700"
                  borderRadius="0"
                  color="white"
                />
                <Button variant="outline" _hover={{ bg: "#3E3D3D" }}>
                  Join Us
                </Button>
              </Flex>
            </Container>
          </Box>

          <Container as={Grid} gridTemplateColumns="repeat(3, 1fr)">
            <Box py="1rem" fontSize="md">
              <FooterLinks data={information} />
            </Box>
            <Box py="1rem" fontSize="md">
              <FooterLinks data={usefulLinks} />
            </Box>
            <Box py="1rem" fontSize="md">
              <FooterLinks data={contactsLinks} />
            </Box>
          </Container>
        </Box>
      )}
    </Fragment>
  );
};
