import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { AppAccessibilityAndGov } from '../../components/AppAccessibilityAndGov'
import { AppMenuProps } from '../../components/AppMenu/AppMenu'
import { AppText } from '../../components/AppText'
import { AppHeader } from './AppHeader/AppHeader'

interface AppLayoutProps {
    title?: string
    menuItems?: AppMenuProps['menuItems']
    children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ title, menuItems, children }) => {
    return (
        <Flex w="full" minH="100vh" flexDir="column" alignItems="center" justifyContent="space-between">
            <Box w="full" maxW="62rem" py={5}>
                <AppHeader menuItems={menuItems} />

                {title && <AppText mt="57px" maxW="500px" variant="heading-md">{title}</AppText>}
                
                {children}
            </Box>

            <Box w="full" maxW="62rem">
                <AppAccessibilityAndGov />
            </Box>
        </Flex>
    )
}