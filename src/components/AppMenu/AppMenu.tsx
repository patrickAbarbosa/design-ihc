import { useHistory } from "react-router-dom";
import { IconButton, Menu, MenuButton, MenuItem, MenuItemProps, MenuList } from "@chakra-ui/react"
import { BarsSolidIcon } from "../icons/BarsSolidIcon"
import { AppMenuItem } from "./AppMenuItem";

interface IMenuItem {
    children: React.ReactNode
    options: MenuItemProps
}

export interface AppMenuProps {
    menuItems?: IMenuItem[]
}

export const AppMenu = ({ menuItems }: AppMenuProps) => {
    const history = useHistory();

    const goToHome = () => {
        history.push('/')
    }

    return (
        <Menu placement="bottom-end">
            <MenuButton
                as={IconButton}
                aria-label='Menu'
                icon={<BarsSolidIcon />}
                
            />

            <MenuList border="none" rounded="12px" boxShadow="0px 0px 20px rgba(0, 0, 0, 0.13)">
                {menuItems?.map(menuItem => (
                    <AppMenuItem {...menuItem.options}>{menuItem.children}</AppMenuItem>
                ))}

                <AppMenuItem onClick={goToHome}>
                    Sair
                </AppMenuItem>
            </MenuList>
        </Menu>
    )
}