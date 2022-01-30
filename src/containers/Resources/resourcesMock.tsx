import { AppTableHeadProps  } from '../../components/AppTable/AppTableHead';
import { AppTableBodyProps } from '../../components/AppTable/AppTableBody';
import { AppButton } from '../../components/AppButton/AppButton';

const columns: AppTableHeadProps['columns'] = [
    { text: 'Nome' },
    { text: 'Quantidade' },
    { text: 'Disponível' },
    { text: 'Reservas' },
]

const renderViewResource = () => <AppButton variant="link-default" h="20px">Ver reservas</AppButton>

const lines: AppTableBodyProps['lines'] = [
    [{ children: 'Quadra de basquete' }, { children: 1 }, { children: 'Sim' }, { children: renderViewResource() }],
    [{ children: 'Bola de handebol' }, { children: 48 }, { children: 'Não' }, { children: renderViewResource() }],
    [{ children: 'Bola de voleibol' }, { children: 64 }, { children: 'Sim' }, { children: renderViewResource() }],
]
export const resourcesMock = {
    columns,
    lines,
}
