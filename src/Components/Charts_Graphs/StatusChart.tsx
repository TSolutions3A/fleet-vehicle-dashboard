import React from "react";
import { RingProgress, Text, Paper, Center, Group, rem } from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import { Icons, TrackingDataProps } from "../utils";

const icons: Icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const StatusChart = (props: { data: TrackingDataProps[] }) => {
  const { data } = props;

  // Initialize counts for "Idle" and "Moving" statuses
  let idleCount = 0;
  let movingCount = 0;

  // Count the statuses
  data.forEach((item) => {
    if (item.vehicleStatus === false) {
      // "Idle" status (false)
      idleCount++;
    } else {
      // "Moving" status (true)
      movingCount++;
    }
  });

  // Define data for rendering
  const statusData = [
    {
      label: "Idle",
      stats: idleCount.toString(),
      progress: (idleCount / data.length) * 100,
      color: "teal",
      icon: "down",
    },
    {
      label: "Moving",
      stats: movingCount.toString(),
      progress: (movingCount / data.length) * 100,
      color: "blue",
      icon: "up",
    },
  ];

  return (
    <>
      {statusData.map((stat, index) => {
        const Icon = icons[stat.icon];
        return (
          <Paper withBorder radius="md" p="md" my="md" key={index}>
            <Group>
              <RingProgress
                size={80}
                roundCaps
                thickness={8}
                sections={[{ value: stat.progress, color: stat.color }]}
                label={
                  <Center>
                    <Icon
                      style={{ width: rem(20), height: rem(20) }}
                      stroke={"1.5"}
                    />
                  </Center>
                }
              />
              <div>
                <Text c="dimmed" size="md" tt="uppercase" fw={700}>
                  {stat.label}
                </Text>
                <Text fw={700} size="xl">
                  {stat.stats}
                </Text>
              </div>
            </Group>
          </Paper>
        );
      })}
    </>
  );
};

export default StatusChart;
