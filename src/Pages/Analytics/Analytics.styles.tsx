import { createStyles } from "@mantine/core";

export const analyticStyles = createStyles(() => ({
  containerMain: {
    margin: 0,
    padding: "2% 1%",
    width: "100%",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
  },
  popUp: {
    position: "absolute",
    height: "70vh",
    backgroundColor: "orange",
    width: "100%",
  },
}));
