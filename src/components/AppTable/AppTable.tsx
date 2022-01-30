import { Box, Table } from "@chakra-ui/react";
import { AppTableHead, AppTableHeadProps } from './AppTableHead/AppTableHead';
import { AppTableBodyProps, AppTableBody } from './AppTableBody/AppTableBody';

interface AppTableProps {
    columns: AppTableHeadProps['columns']
    lines: AppTableBodyProps['lines']
}

export const AppTable = ({ columns, lines}: AppTableProps) => {
  return (
    <Box border="1px solid #F8F8F8" rounded="18px" overflow="hidden">
      <Table>
          <AppTableHead columns={columns} />

          <AppTableBody lines={lines} />
      </Table>
    </Box>
  );
};
