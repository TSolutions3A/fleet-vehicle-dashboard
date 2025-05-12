import { createStyles, rem } from "@mantine/core";

export const homeStyles = createStyles((theme) => ({
  wrapper: {
    padding: "calc(var(--mantine-spacing-xl) * 2) var(--mantine-spacing-xl)",
  },

  title: {
    fontFamily: "Greycliff CF, var(--mantine-font-family)",
    fontSize: rem("50px"),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "var(--mantine-spacing-md)",
    color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
  },
}));
