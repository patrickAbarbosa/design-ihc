import React from 'react'
import { Divider, Flex } from '@chakra-ui/react'
import { AppAccessibility } from '../AppAccessibility/AppAccessibility'
import { AppGovBr } from '../AppGovBr/AppGovBr'

export const AppAccessibilityAndGov = () => {
    return (
        <Flex alignItems="center">
            <AppAccessibility />

            <Divider orientation='vertical' color="#D3D3D3" mr={3} h="30px" />

            <AppGovBr />
        </Flex>
    )
}