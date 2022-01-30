import React, { useState } from 'react'
import { AppMenuProps } from '../../components/AppMenu/AppMenu'
import { AppTable } from '../../components/AppTable/AppTable'
import { AppLayout } from '../../layouts/AppLayout'
import { AppResourceForm } from './components/AppResourceForm'
import { resourcesMock } from './resourcesMock'

export const ResourcesContainer = () => {
    const [isOpenForm, setIsOpenForm] = useState(false)

    const handleOnClose = () => {
        setIsOpenForm(false)
    }

    const handleOnOpen = () => {
        setIsOpenForm(true)
    }

    const menuItems: AppMenuProps['menuItems'] = [{
        children: 'Cadastrar recurso',
        options: {
            onClick: handleOnOpen,
        }
    }]

    return (
        <AppLayout title="Recursos" menuItems={menuItems}>
            <AppTable columns={resourcesMock.columns} lines={resourcesMock.lines} />

            <AppResourceForm isOpen={isOpenForm} onClose={handleOnClose} onSubmit={() => null} />
        </AppLayout>
    )
}