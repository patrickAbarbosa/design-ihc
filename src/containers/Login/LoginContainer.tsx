import { Box, Flex, Image } from "@chakra-ui/react";
import { AppLoginForm } from "./components/AppLoginForm/AppLoginForm";
import { AppAccessibilityAndGov } from "../../components/AppAccessibilityAndGov";
import LogoImage from "../../assets/Header.png";

export const LoginContainer = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Image src={LogoImage} mb={5} />
      <AppLoginForm />

      <Box mt={5}>
        <AppAccessibilityAndGov />
      </Box>
    </Flex>
  );
};
