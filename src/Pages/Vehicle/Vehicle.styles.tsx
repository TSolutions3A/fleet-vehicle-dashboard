import { createStyles } from "@mantine/core";

export const vehicleStyles = createStyles(() => ({
  containerMain: {
    margin: 0,
    padding: "0 1%",
    height: "100%",
    width: "100%",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  gridRow: {
    width: "100%",
    height: "10%",
  },
  gridRowBottom: {
    height: "90%",
    width: "100%",
  },
  popUp: {
    position: "absolute",
    height: "70vh",
    backgroundColor: "orange",
    width: "60vw",
  },
}));
