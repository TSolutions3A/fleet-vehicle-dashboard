import { useForm } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";
import { TrackingDataProps } from "../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addVehicles } from "./Vehicles.styles";

export default function AddVehicle(props: {
  currentVehicle: TrackingDataProps[];
  setPopup: (value: boolean) => void;
}) {
  const { currentVehicle, setPopup } = props;
  const { classes } = addVehicles();
  const notify = () =>
    toast.success("Vehicle information updated successfully!", {
      position: "top-center",
      autoClose: 3000,
    });

  const handleSubmit = () => {
    notify();
    setPopup(false);
  };

  const initialValues = {
    driverName: currentVehicle[0]?.driverName || "",
    vehicleName: currentVehicle[0]?.vehicleName || "",
    vehicleType: currentVehicle[0]?.vehicleType || "",
  };

  const form = useForm({
    initialValues,

    validate: {
      driverName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      vehicleName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      vehicleType: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <Box className={classes.container} mx={"auto"}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Driver Name" {...form.getInputProps("driverName")} />
        <TextInput
          mt="sm"
          label="Vehicle Name"
          {...form.getInputProps("vehicleName")}
        />
        <TextInput
          mt="sm"
          label="Vehicle Type"
          {...form.getInputProps("vehicleType")}
        />

        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
