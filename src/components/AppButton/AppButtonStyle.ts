import { IButtonVariants } from "./AppButton";

export const AppButtonStyle: { [key in IButtonVariants]: object } = {
  "solid-success": {
    backgroundColor: "success",
    color: "neutral-dark",
    borderRadius: "30px",
    minWidth: "90px",
    fontSize: "12px",
    _hover: {
      opacity: 0.7,
    },
  },
  "solid-success-disabled": {
    backgroundColor: "success",
    color: "neutral-dark",
    borderRadius: "30px",
    minWidth: "90px",
    fontSize: "12px",
    opacity: 0.5,
  },
  "solid-error": {
    backgroundColor: "error",
    color: "#FFF",
    borderRadius: "30px",
    minWidth: "90px",
    fontSize: "12px",
    _hover: {
      opacity: 0.7,
    },
  },
  "link-default": {
    color: "neutral-dark",
    fontSize: "12px",
    textDecorationLine: "underline",
  },
};
