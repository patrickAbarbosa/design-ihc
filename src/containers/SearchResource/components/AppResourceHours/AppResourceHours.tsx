interface IResourceHour {
    date: string
    hour: string
    status: 'reserved' | 'available' 
}

type IResourceDays = IResourceHour[]

interface AppResourceWeek {
    days?: IResourceDays[]
}

export const AppResourceHours = ({ days }: AppResourceWeek) => {
    
    return (
       <p>render week</p>
    )
}