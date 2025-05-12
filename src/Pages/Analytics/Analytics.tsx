import { Grid, Text, useMantineTheme } from "@mantine/core";
import DistanceChart from "../../Components/Charts_Graphs/DistanceChart";
import PositionChart from "../../Components/Charts_Graphs/PositionChart";
import StatusChart from "../../Components/Charts_Graphs/StatusChart";
import { TrackingDataProps } from "../../Components/utils";
import { analyticStyles } from "./Analytics.styles";

const Analytics = (props: { data: TrackingDataProps[] }) => {
  const { data } = props;
  const theme = useMantineTheme();
  const { classes } = analyticStyles();

  return (
    <div className={classes.containerMain}>
      <h3>Analytics</h3>
      <Grid gutter={theme.spacing.md}>
        <Grid.Col span={6}>
          <div>
            <Text fw={700}>Vehicle Status</Text>
            <StatusChart data={data} />
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <Text fw={700}>Position Chart</Text>
            <Text fw={400}>x: Latitude | y: Longitude</Text>
            <PositionChart data={data} />
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text fw={700}>Distance Chart</Text>
          <DistanceChart data={data} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Analytics;
