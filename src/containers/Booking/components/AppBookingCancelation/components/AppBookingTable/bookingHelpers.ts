import { AppTableHeadProps  } from '../../../../../../components/AppTable/AppTableHead';

export const bookingColumns: AppTableHeadProps['columns'] = [
    { text: 'Nome' },
    { text: 'Dia' },
    { text: 'Horário' },
    { text: 'Status' },
]

export const statusLabel = {
    reserved: 'Reservado',
    canceled: 'Cancelado',
    finish: 'Finalizado'
}