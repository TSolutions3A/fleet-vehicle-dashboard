import { createStyles } from "@mantine/core";

export const appStyles = createStyles(() => ({
  gridMain: {
    margin: 0,
    padding: 0,
    height: "100%",
    width: "100%",
    maxHeight: "100vh",
    display: "flex",
  },
  gridCol: {
    margin: 0,
    padding: 0,
    zIndex: 3000,
  },
}));
