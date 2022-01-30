import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { AppText, AppTextProps } from "../AppText/AppText";
import {
  AppModalActions,
  AppModalActionsProps,
} from "./AppModalActions/AppModalActions";

interface AppModalProps {
  isOpen: boolean;
  onClose(): void;
  title?: string;
  titleProps?: AppTextProps;
  actions?: AppModalActionsProps;
  children: React.ReactNode;
}

export const AppModal = ({
  isOpen,
  onClose,
  title,
  titleProps,
  actions,
  children,
}: AppModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.5)" backdropFilter="blur(3px)" />

      <ModalContent rounded="30px">
        <ModalCloseButton />

        <ModalHeader>
          <AppText variant="heading-sm" {...titleProps}>
            {title}
          </AppText>
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        {actions && <AppModalActions {...actions} />}
      </ModalContent>
    </Modal>
  );
};
