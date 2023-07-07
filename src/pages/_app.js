import "@/styles/globals.css";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import {
  Box,
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import { createUploadLink } from "apollo-upload-client";
import { LoginContextProvider } from "@/context/login";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { HeaderTop } from "@/components/client/HeaderTop";
import { Header } from "@/components/client/Header";
import { Footer } from "@/components/client/Footer";
import { SidebarLayout } from "@/layouts/sidebarLayout";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "normal",
    textTransform: "uppercase",
    borderRadius: "none",
    paddingX: "1.5rem",
    _hover: {
      backgroundColor: "brand.800",
    },
  },
  sizes: {
    sm: {
      fontSize: "0.6667rem",
    },
    md: {
      fontSize: "0.7222rem",
    },
    lg: {
      fontSize: "0.7222rem",
    },
    xl: {
      fontSize: "1rem",
      height: "3.5556rem",
      paddingX: "3rem",
    },
  },
  defaultProps: {
    variant: "primary",
  },
  variants: {
    primary: {
      backgroundColor: "brand.900",
      color: "white",
    },
    danger: {
      backgroundColor: "red.500",
    },
    outline: {
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
      padding: "0 1.5rem",
    },
  },
});

const dividerTheme = defineStyleConfig({
  variants: {
    bold: {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "gray.300",
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f2f2f2",
      200: "#d9d9d9",
      300: "#bfbfbf",
      400: "#a6a6a6",
      500: "#8c8c8c",
      600: "#737373",
      700: "#595959",
      800: "#2a2a2a",
      900: "#121212",
    },
  },
  fonts: {
    heading: `"League Spartan", sans-serif`,
    body: `"League Spartan", sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Divider: dividerTheme,
    Container: {
      baseStyle: {
        maxW: "83rem",
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: "https://sales-future-devs-e805ff6f47bb.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("session");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
      "apollo-require-preflight": true,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    createUploadLink({
      uri: "https://sales-future-devs-e805ff6f47bb.herokuapp.com/graphql",
    })
  ),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const tokenSession = localStorage.getItem("session");
    const decodedToken = jwt.decode(tokenSession);
    const fecha = new Date(decodedToken?.exp * 1000);
    if (fecha < new Date()) {
      localStorage.removeItem("session");
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <LoginContextProvider>
          <HeaderTop />
          <Box>
            <Header />
          </Box>
          {/* <SidebarLayout>
          </SidebarLayout> */}
          <Component {...pageProps} />
          <Footer />
        </LoginContextProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
