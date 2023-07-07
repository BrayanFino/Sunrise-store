import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";

export const FooterLinks = ({ data }) => {
  return (
    <Fragment>
      <Text
        as={Flex}
        textTransform="uppercase"
        mb="1rem"
        justifyContent="center"
      >
        {data.title}
      </Text>
      <Flex
        as={List}
        gap="1rem"
        flexDirection="column"
        color="gray"
        align="center"
      >
        {data.links.map((link, i) => {
          return (
            <ListItem key={i} as={Flex}>
              <Flex gap="0.25rem" alignItems="center">
                <Link href={link.href}>{link.title}</Link>
              </Flex>
            </ListItem>
          );
        })}
      </Flex>
    </Fragment>
  );
};
