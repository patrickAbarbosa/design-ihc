import { Flex, Image } from "@chakra-ui/react"
import LogoImage from "../../../assets/Header.png"
import { AppMenu, AppMenuProps } from "../../../components/AppMenu/AppMenu"

interface AppHeaderProps {
    menuItems?: AppMenuProps['menuItems'] 
}

export const AppHeader = ({ menuItems }: AppHeaderProps) => {
    return (
        <Flex w="full" justifyContent="space-between" alignItems="center">
            <Image src={LogoImage} mb={5} />

            <AppMenu menuItems={menuItems} />
        </Flex>
    )
}