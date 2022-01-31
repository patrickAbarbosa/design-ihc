import { AppLayout } from '../../layouts/AppLayout'
import { AppResourceHours } from './components/AppResourceHours/AppResourceHours';
import { searchResource } from './searchResourceMock';

export const SearchResourceContainer = () => {
    return (
        <AppLayout title="Reservas de recursos e espaços físicos">
            <AppResourceHours days={searchResource.days} />
        </AppLayout>
    )
}