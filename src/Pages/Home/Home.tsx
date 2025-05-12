import {
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  rem,
  Container,
  Code,
  Badge,
} from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { IconDashboard, IconReportAnalytics } from "@tabler/icons-react";
import { homeStyles } from "./Home.styles";

const features = [
  {
    icon: IconReportAnalytics,
    title: "View the statistics",
    description:
      "Statistics are an important feature which helps to analyze the running system. Hover on the data points and see magic in reality. Although magic doesn't exist, it's hardwork & logic merged.",
  },
  {
    icon: IconSquareRoundedPlusFilled,
    title: "CRUD Vehicles",
    description:
      "You can add new vehicles to the list. Add the vehicle's name as well as their type. Edit the vehicles as well. The MockApi doesn't let us post or delete the api. But I added a demo prototype.",
  },
  {
    icon: IconDashboard,
    title: "Integrated with a dashboard",
    description:
      "The dashboard has a map along with a scrollable & clickable list of vehicles which would direct you to the longitude and latitude of their location. Search for specific vehicles and filter using their current status. Note: MockApi pulls longitude and latitude data randomly, hence the vehicles in the ocean & longitude and Latitude data in vehicle card instead of address.. Other apis require payment for street longitude and latitude data as well as reverse geolocation for address as per my knowledge.",
  },
];

export default function FeaturesTitle() {
  const { classes } = homeStyles();
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));
  const code = `//API Parameters
  createdAt: number;
  driverName: string;
  startLongitude: string;
  startLatitude: string;
  vehicleStatus: boolean;
  endLongitude: string;
  endLatitude: string;
  vehicleType: string;
  vehicleName: string;
  distanceTotal: number;
  id: string;`;

  return (
    <Container className={classes.wrapper}>
      <Grid mt={50}>
        <Grid.Col span={12} py={50}>
          <Title className={classes.title} order={2}>
            Vehicle tracking app
          </Title>
          <Text c="gray" pt={10}>
            Built with <b>React</b>, <b>TypeScript</b>, <b>MantineUI</b>,{" "}
            <b>Chartjs</b>, <b>Leafletjs</b> & <b>Axios</b>. Along with the
            power vested by <b>MockApi</b> to take advantage of the data curated
            specifically for this project, we experience tracking cars that are
            in the <b>OCEAN</b>.
            <hr />
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <SimpleGrid cols={2} spacing={30}>
            {items}
            <Code block>{code}</Code>
          </SimpleGrid>
        </Grid.Col>
        <Badge color="blue" size="xl" my="xl">
          Click from the sidebar to start
        </Badge>
      </Grid>
    </Container>
  );
}
