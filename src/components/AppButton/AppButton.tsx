import { Button, ButtonProps } from "@chakra-ui/react";
import { AppButtonStyle } from "./AppButtonStyle";

export type IButtonVariants =
  | "solid-success"
  | "link-default"
  | "solid-error"
  | "solid-success-disabled";

export interface AppButtonProps extends ButtonProps {
  variant?: IButtonVariants;
}

export const AppButton = ({
  children,
  variant = "solid-success",
  ...props
}: AppButtonProps) => {
  return (
    <Button {...AppButtonStyle[variant]} {...props}>
      {children}
    </Button>
  );
};
