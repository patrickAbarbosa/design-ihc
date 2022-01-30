import React from 'react'
import { AppButton } from '../AppButton/AppButton';
import AccessibilityImage from '../../assets/accessibility.png'
import { Image } from '@chakra-ui/react';

export const AppAccessibility = () => {
    return (
        <AppButton variant="link-default">
            Acessibilidade

            <Image src={AccessibilityImage} ml={2} />
        </AppButton>
    )
}