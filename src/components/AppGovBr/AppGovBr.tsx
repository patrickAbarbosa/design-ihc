import React from 'react'
import { Image, Link } from '@chakra-ui/react'
import GovBrImage from '../../assets/gov.png'

export const AppGovBr = () => {
    return (
        <Link>
            <Image src={GovBrImage} />
        </Link>
    )
}