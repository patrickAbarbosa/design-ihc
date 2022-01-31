import { Box, Flex } from "@chakra-ui/react";
import { useMemo } from "react"
import { AppTable } from "../../../../components/AppTable/AppTable";
import { columns } from './resourcesHelpers';

interface IResourceHour {
    date: string
    hour: string
    status: 'reserved' | 'available' 
}

export type IResourceDays = IResourceHour[]

interface AppResourceWeek {
    days?: IResourceDays[]
}

export const AppResourceHours = ({ days }: AppResourceWeek) => {
    const lines = useMemo(() => {
        const _lines: IResourceDays[] = []

        if (days && days.length > 0) {
            

            for(let column = 0; column < days[0].length; column++) {
                const hourDays: IResourceHour[] = [];
                for(let line = 0; line < days.length; line++) {
                    hourDays.push(days[line][column])
                }
    
                _lines.push(hourDays)
            }
        }
        return _lines
    }, [days])

    const renderHour = (item: IResourceHour) => {
        const colorStatus = {
            available: 'success',
            reserved: 'error',
        }

        return (
            <Flex alignItems="center" justifyContent="center">
                {item.hour}
                <Box w="10px" h="10px" ml="10px" rounded="50%" bg={colorStatus[item.status]} />
            </Flex>
        )
    }

    const renderColumns = (line: IResourceHour[]) => {
        return line.map(column => ({ children:  renderHour(column)}))
    }

    const renderLines = () => {
        return lines.map(line => renderColumns(line))
    }

    return (
       <AppTable columns={columns} lines={renderLines()} />           
    )
}