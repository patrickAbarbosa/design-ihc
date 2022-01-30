import { AppModal } from "../../../../components/AppModal";
import { AppText } from "../../../../components/AppText";

interface AppBookingCancellationProps {
  isOpen: boolean;
  onClose(): void;
  onSubmit(): void;
  onCancel(): void;
  resourceName: string;
  date: string;
  time: string;
}

export const AppBookingCancellation = ({
  isOpen,
  onClose,
  onSubmit,
  onCancel,
  resourceName,
  date,
  time,
}: AppBookingCancellationProps) => {
  const modalActions = {
    successText: "Sim, cancelar reserva",
    successAction: onSubmit,
    cancelText: "Não cancelar reserva",
    cancelAction: onCancel,
  };

  return (
    <AppModal
      title={`Deseja cancelar a reserva da ${resourceName}?`}
      titleProps={{ textAlign: 'center'}}
      isOpen={isOpen}
      onClose={onClose}
      actions={modalActions}
    >
      <AppText w="full" textAlign="center" fontWeight="bold">
        {date} às {time}
      </AppText>
    </AppModal>
  );
};
