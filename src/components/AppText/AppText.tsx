import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { AppTextStyle } from './AppTextStyle'

export type ITextVariants = 'heading-md' | 'heading-sm' | 'paragraph'

export interface AppTextProps extends TextProps {
    variant?: ITextVariants
}

export const AppText = ({ variant = 'paragraph', children, ...props }: AppTextProps) => {
    return <Text color="neutral-medium" {...AppTextStyle[variant]} {...props}>{children}</Text>
}