import { Tbody, Td, Tr } from "@chakra-ui/react"

interface ITableColumn { 
    children: React.ReactNode
    options?: Parameters<typeof Td>[0]
}

type ITableLine = ITableColumn[]

export interface AppTableBodyProps {
    lines: ITableLine[],
}

export const AppTableBody = ({ lines }: AppTableBodyProps) => {
    const renderColumns = (line: ITableLine) => {
        return line.map((column, index) => <Td borderBottom="none" textAlign={index > 0 ? 'center' : 'left'} {...column.options}>{column.children}</Td>)
    }

    const renderLines = () => {
        return lines.map(line => (
                <Tr _hover={{ bg: '#F8F8F8'}}>
                    {renderColumns(line)}
                </Tr>
            )
        )
    }
    return (
        <Tbody>
           {renderLines()}
        </Tbody>
    )
}