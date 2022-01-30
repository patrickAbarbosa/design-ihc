import { Input, InputProps } from '@chakra-ui/react'
import React from 'react'
import { AppInputStyle } from './AppInputStyle'

export const AppInput = (props: InputProps) => {
    return <Input {...AppInputStyle} {...props}/>
}