import { AppButton } from "../../../../../../components/AppButton";
import { AppTable } from "../../../../../../components/AppTable/AppTable";
import { bookingColumns, statusLabel } from "./bookingHelpers";
import { IButtonVariants } from "../../../../../../components/AppButton/AppButton";

export interface IResource {
  id?: number;
  name: string;
  date: string;
  time: string;
  status: "reserved" | "canceled" | "finish";
}

interface AppBookingTableProps {
  resources: IResource[];
  onCancelResource(resource: IResource): void;
}

const statusButtonVariant: { [key in IResource["status"]]: IButtonVariants } = {
  reserved: "solid-success",
  canceled: "solid-error",
  finish: "solid-success-disabled",
};

export const AppBookingTable = ({
  resources,
  onCancelResource,
}: AppBookingTableProps) => {
  const handleOnClickResource = (resource: IResource) => {
    if (resource.status === "reserved") {
      onCancelResource(resource);
    }
  };

  const renderStatus = (resource: IResource) => {
    return (
      <AppButton
        h={5}
        onClick={() => handleOnClickResource(resource)}
        variant={statusButtonVariant[resource.status]}
      >
        {statusLabel[resource.status]}
      </AppButton>
    );
  };

  const renderResources = () => {
    return resources.map((resource) => [
      { children: resource.name },
      { children: resource.date },
      { children: resource.time },
      { children: renderStatus(resource) },
    ]);
  };

  return <AppTable columns={bookingColumns} lines={renderResources()} />;
};
