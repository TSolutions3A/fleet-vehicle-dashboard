import { createStyles } from "@mantine/core";

export const dashboardStyles = createStyles(() => ({
  gridMain: {
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    maxHeight: "100vh",
    display: "flex",
  },
  gridColLeft: {
    height: "98vh",
  },
  search: {},
  vehicleList: {
    height: "92vh",
    marginTop: "10px",
    overflow: "scroll",
    padding: 0,
    borderTop: "1px solid silver",
  },
  gridColRight: {
    height: "100%",
    overflow: "hidden",
    maxHeight: "98.5vh",
    margin: 0,
  },
}));
