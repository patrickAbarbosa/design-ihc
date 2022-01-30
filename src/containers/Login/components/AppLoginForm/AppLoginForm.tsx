import { Flex, FormControl } from '@chakra-ui/react'
import React from 'react'
import { AppButton } from '../../../../components/AppButton'
import { AppInput } from '../../../../components/AppInput'
import { AppText } from '../../../../components/AppText'

export const AppLoginForm = () => {
    return (
        <Flex w="310px" flexDir="column" boxShadow="0px 0px 14px rgba(0, 0, 0, 0.1)" rounded="30px" px="18px" pt="22px" pb="8px">
            <AppText variant="heading-md">Login</AppText>

            <FormControl>
                <AppInput placeholder="CPF" type="tel" mb={4} />

                <AppInput placeholder="Senha" type="password" mb={4} />

                <AppButton w="full">ENTRAR</AppButton>
            </FormControl>

            <AppButton mx="auto" variant="link-default">Esqueci minha senha</AppButton>
        </Flex>
    )
}