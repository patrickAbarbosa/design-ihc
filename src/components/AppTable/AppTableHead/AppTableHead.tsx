import { Th, Thead, Tr } from "@chakra-ui/react";

interface ITableHeadColumn {
  text: string;
  options?: Parameters<typeof Th>[0];
}

export interface AppTableHeadProps {
  columns: ITableHeadColumn[];
}

export const AppTableHead = ({ columns }: AppTableHeadProps) => {
  return (
    <Thead>
      <Tr>
        {columns.map((column) => (
          <Th
            borderBottom="none"
            bg="#ECECEC"
            textAlign="center"
            {...column.options}
          >
            {column.text}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};
