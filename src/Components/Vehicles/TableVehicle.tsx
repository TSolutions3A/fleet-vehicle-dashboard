import { useState } from "react";
import { Table, ScrollArea, Group } from "@mantine/core";
import { TrackingDataProps } from "../utils";

import { IconEdit, IconTrash } from "@tabler/icons-react";
import { tableVehicles } from "./Vehicles.styles";

export default function TableVehicle(props: {
  data: TrackingDataProps[];
  setPopup: (value: boolean) => void;
  setClickedVehicle: (value: TrackingDataProps[]) => void;
}) {
  const { data, setPopup, setClickedVehicle } = props;
  const { classes, cx } = tableVehicles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td>{row.vehicleName}</td>
      <td>{row.vehicleType}</td>
      <td>{row.vehicleStatus === false ? "Idle" : "Moving"}</td>
      <td>
        <Group>
          <div
            onClick={() => {
              setPopup(true);
              setClickedVehicle([row]);
            }}
          >
            <IconEdit color="#228be6" className={classes.icon} />
          </div>
          <div color="red">
            <IconTrash color="red" className={classes.icon} />
          </div>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea
      w={"100%"}
      h={"90%"}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table horizontalSpacing="md" maw={"100%"}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Name</th>
            <th>Vehicle Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
