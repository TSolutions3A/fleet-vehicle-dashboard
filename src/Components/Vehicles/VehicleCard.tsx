import { Text, Card, Group, Badge } from "@mantine/core";
import { VehicleCardProps } from "../utils";
import { vehicleCard } from "./Vehicles.styles";

export default function VehicleCard({
  title,
  type,
  status,
  longitude,
  latitude,
  active,
  onClick,
}: VehicleCardProps) {
  const { classes, cx } = vehicleCard();

  const cardClicked = () => {
    onClick();
  };

  return (
    <Card
      withBorder
      p="xl"
      radius="md"
      className={cx(classes.card, {
        [classes.cardActive]: active,
      })}
      onClick={cardClicked}
    >
      <Group position="apart">
        <Text fz="xl" className={classes.label}>
          {title}
        </Text>
        <Badge color={status === true ? "blue" : "green"}>
          {status === true ? "Moving" : "Idle"}
        </Badge>
      </Group>
      <Text fz="sm" color={active ? "white" : "dimmed"}>
        {type}
      </Text>
      <Group position="apart">
        <Text color={active ? "white" : "dimmed"} mt={20}>
          Long: {longitude}, Lat: {latitude}
        </Text>
      </Group>
    </Card>
  );
}
