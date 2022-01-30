import React from "react";
import { useState } from "react";
import { AppLayout } from "../../layouts/AppLayout";
import { AppBookingCancellation } from "./components/AppBookingCancelation";
import {
  AppBookingTable,
  IResource,
} from "./components/AppBookingCancelation/components/AppBookingTable";
import { useHistory } from "react-router-dom";

export const BookingContainer = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resources, setResources] = useState<IResource[]>([
    {
      id: 1,
      name: "Quadra de basquete",
      date: "17/06/2022",
      time: "14:00",
      status: "reserved",
    },
    {
      id: 2,
      name: "Bola de handebol",
      date: "17/03/2022",
      time: "14:00",
      status: "canceled",
    },
    {
      id: 3,
      name: "Bola de futebol",
      date: "17/02/2021",
      time: "14:00",
      status: "finish",
    },
  ]);

  const [resource, setResource] = useState<IResource>();

  const handleOnClose = () => {
    setIsModalOpen(false);
    setResource(undefined);
  };

  const handleOnCancelResource = (resource: IResource) => {
    setResource(resource);
    setIsModalOpen(true);
  };

  const cancelReservation = () => {
    const resourceId = resource?.id;
    setResources((_resources) => {
      const newResources = [..._resources];

      const resourceToUpdate = newResources.find(
        (_resource) => _resource.id === resourceId
      );

      if (resourceToUpdate) {
        resourceToUpdate.status = "canceled";
      }

      return newResources;
    });

    handleOnClose();
  };

  const goToResources = () => {
    history.push("/reservar-recurso");
  };

  const menuItems = [
    { children: "Reservar recurso", options: { onClick: goToResources } },
  ];

  return (
    <AppLayout title="Minhas reservas" menuItems={menuItems}>
      <AppBookingTable
        resources={resources}
        onCancelResource={handleOnCancelResource}
      />

      <AppBookingCancellation
        isOpen={isModalOpen}
        onSubmit={cancelReservation}
        onCancel={handleOnClose}
        onClose={handleOnClose}
        resourceName={resource?.name || ""}
        date={resource?.date || ""}
        time={resource?.time || ""}
      />
    </AppLayout>
  );
};
