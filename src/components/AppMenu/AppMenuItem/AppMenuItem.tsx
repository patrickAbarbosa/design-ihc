import { MenuItem, MenuItemProps } from "@chakra-ui/react"

export const AppMenuItem = ({ children, ...props }: MenuItemProps) => {
    return (
        <MenuItem fontWeight="bold" color="neutral-medium" {...props}>
            {children}
        </MenuItem>
    )
}