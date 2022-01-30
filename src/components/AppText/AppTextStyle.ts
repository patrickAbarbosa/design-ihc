import { ITextVariants } from "./AppText";

export const AppTextStyle: { [key in ITextVariants]: object } = {
    paragraph: {
        fontSize: '14px',
        lineHeight: '18px',
    },
    'heading-sm': {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '28px',
        mb: '30px',
    },
    'heading-md': {
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: '30px',
        mb: '34px',
    }
}