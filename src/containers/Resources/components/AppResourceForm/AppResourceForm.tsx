import { AppInput } from "../../../../components/AppInput"
import { AppModal } from '../../../../components/AppModal/AppModal';

interface AppResourceFormProps {
    isOpen: boolean
    onClose(): void
    onSubmit(resource: { name: string; quantity: number }): void 
}

export const AppResourceForm = ({ isOpen, onClose, onSubmit }: AppResourceFormProps) => {
    const handleSubmit = () => {
        
    }

    const handleOnClose = () => {
        onClose()
    }
    const modalActions = {
        successAction: handleSubmit,
        successText: 'CADASTRAR',
        cancelText: 'CANCELAR',
        cancelAction: handleOnClose,
    }

    return (
        <AppModal isOpen={isOpen} onClose={onClose} title="Cadastrar recurso" actions={modalActions}>
            <AppInput placeholder="Nome do recurso" mb={5} />

            <AppInput placeholder="Quantidade do recurso" />
        </AppModal>
    )
}