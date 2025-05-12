import { useState } from "react";
import { Button, Group } from "@mantine/core";
import TableVehicle from "../../Components/Vehicles/TableVehicle";
import { TrackingDataProps } from "../../Components/utils";
import AddVehicle from "../../Components/Vehicles/AddVehicle";
import { vehicleStyles } from "./Vehicle.styles";

const Vehicle = (props: { data: TrackingDataProps[] }) => {
  const { data } = props;
  const { classes } = vehicleStyles();
  const [popUp, setPopUp] = useState(false);
  const [clickedVehicle, setClickedVehicle] = useState<TrackingDataProps[]>([]);

  return (
    <div className={classes.containerMain}>
      <Group position="apart" className={classes.gridRow}>
        <h3>All Vehicles</h3>
        <Button
          onClick={() => {
            setPopUp(!popUp);
            setClickedVehicle([]);
          }}
        >
          {popUp ? "Back to List" : "Add Vehicles +"}
        </Button>
      </Group>
      <Group className={classes.gridRowBottom}>
        {popUp ? (
          <AddVehicle currentVehicle={clickedVehicle} setPopup={setPopUp} />
        ) : (
          <TableVehicle
            data={data}
            setPopup={setPopUp}
            setClickedVehicle={setClickedVehicle}
          />
        )}
      </Group>
    </div>
  );
};

export default Vehicle;
