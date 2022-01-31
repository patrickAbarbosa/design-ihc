import { AppTableHeadProps } from "../../components/AppTable/AppTableHead";
import { IResourceDays } from "./components/AppResourceHours";

const columns: AppTableHeadProps["columns"] = [
  { text: "Nome" },
  { text: "Quantidade" },
  { text: "Disponível" },
  { text: "Reservas" },
];

const days: IResourceDays[] = [
  [
    {
      date: '17/06/2022',
      hour: '08:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '09:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '10:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '11:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '12:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '13:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '14:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '15:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '16:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '17:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '18:00',
      status: 'available',
    },
  ],
  [
    {
      date: '17/06/2022',
      hour: '08:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '09:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '10:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '11:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '12:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '13:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '14:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '15:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '16:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '17:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '18:00',
      status: 'reserved',
    },
  ],
  [
    {
      date: '17/06/2022',
      hour: '08:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '09:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '10:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '11:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '12:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '13:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '14:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '15:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '16:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '17:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '18:00',
      status: 'available',
    },
  ],
  [
    {
      date: '17/06/2022',
      hour: '08:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '09:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '10:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '11:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '12:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '13:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '14:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '15:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '16:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '17:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '18:00',
      status: 'available',
    },
  ],
  [
    {
      date: '17/06/2022',
      hour: '08:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '09:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '10:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '11:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '12:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '13:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '14:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '15:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '16:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '17:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '18:00',
      status: 'available',
    },
  ],
  [
    {
      date: '17/06/2022',
      hour: '08:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '09:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '10:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '11:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '12:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '13:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '14:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '15:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '16:00',
      status: 'available',
    },
    {
      date: '17/06/2022',
      hour: '17:00',
      status: 'reserved',
    },
    {
      date: '17/06/2022',
      hour: '18:00',
      status: 'available',
    },
  ],
]

export const searchResource = {
  columns,
  days,
};
