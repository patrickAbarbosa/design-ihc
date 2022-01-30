import { AppLayout } from '../../layouts/AppLayout'
import { AppResourceHours } from './components/AppResourceHours/AppResourceHours';

export const SearchResourceContainer = () => {
    return (
        <AppLayout title="Reservas de recursos e espaços físicos">
            <AppResourceHours />
        </AppLayout>
    )
}