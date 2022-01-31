import { Box, Flex, FormControl, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { AppButton } from "../../../../components/AppButton";
import { AppInput } from "../../../../components/AppInput";
import { AppText } from "../../../../components/AppText";
import { useHistory } from "react-router-dom";

export const AppLoginForm = () => {
  const toast = useToast();
  const history = useHistory();
  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");

  const handleCPF = (text: string) => {
    setCPF(text.replace(/\D/g, ""));
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (cpf === "29797751007" && password === "1234") {
      history.push("/minhas-reservas");
    } else if (cpf === "18357163009" && password === "admin") {
      history.push("/recursos");
    } else {
      toast({
        position: "bottom",
        render: () => (
          <Box color="white" rounded="50px" p={3} bg="error">
            Usuário inválido!
          </Box>
        ),
      });
    }
  };

  return (
    <Flex
      w="310px"
      flexDir="column"
      boxShadow="0px 0px 14px rgba(0, 0, 0, 0.1)"
      rounded="30px"
      px="18px"
      pt="22px"
      pb="8px"
    >
      <AppText variant="heading-md">Login</AppText>

      <FormControl>
        <AppInput
          placeholder="CPF"
          type="tel"
          mb={4}
          onChange={(e) => handleCPF(e.target.value)}
        />

        <AppInput
          placeholder="Senha"
          type="password"
          mb={4}
          onChange={(e) => handlePassword(e.target.value)}
        />

        <AppButton w="full" onClick={handleSubmit}>
          ENTRAR
        </AppButton>
      </FormControl>

      <AppButton mx="auto" variant="link-default">
        Esqueci minha senha
      </AppButton>
    </Flex>
  );
};
