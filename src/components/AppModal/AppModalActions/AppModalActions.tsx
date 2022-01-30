import { ModalFooter } from "@chakra-ui/react"
import { AppButton } from "../../AppButton"

export interface AppModalActionsProps {
    successText?: string
    successAction?(): void
    cancelText?: string 
    cancelAction?(): void
}

export const AppModalActions = ({ successText, successAction, cancelText, cancelAction }: AppModalActionsProps) => {
    return (
        <ModalFooter alignItems="center" flexDir="column" pb={2}>
            {successText && (
                <AppButton w="270px" onClick={successAction}>
                    {successText}
                </AppButton>
            )}

            {cancelText && (
                <AppButton variant="link-default" onClick={cancelAction}>
                    {cancelText}
                </AppButton>
            )}
        </ModalFooter>
    )
}