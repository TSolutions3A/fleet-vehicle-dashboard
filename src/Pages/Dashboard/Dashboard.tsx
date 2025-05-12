import React, { useState } from "react";
import {
  Grid,
  Group,
  TextInput,
  useMantineTheme,
  SegmentedControl,
  Center,
  ActionIcon,
  Container,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconSearch } from "@tabler/icons-react";
import VehicleCard from "../../Components/Vehicles/VehicleCard";
import Map from "../../Components/Map/Map";
import { TrackingDataProps } from "../../Components/utils";
import { dashboardStyles } from "./Dashboard.styles";

function Dashboard(props: { data: TrackingDataProps[] }) {
  const { data } = props;
  const { classes } = dashboardStyles();
  const theme = useMantineTheme();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [segmentControlValue, setSegmentControlValue] = useState<string>("All");

  const [longStart, setLongStart] = useState<TrackingDataProps[] | null>();
  const [latStart, setLatStart] = useState<TrackingDataProps[] | null>();
  const [longEnd, setLongEnd] = useState<TrackingDataProps[] | null>();
  const [latEnd, setLatEnd] = useState<TrackingDataProps[] | null>();

  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [mapStatus, setMapStatus] = useState<string>("");

  const handleCardClick = (
    index: number,
    startLongitude: TrackingDataProps[] | null,
    startLatitude: TrackingDataProps[] | null,
    endLongitude: TrackingDataProps[] | null,
    endLatitude: TrackingDataProps[] | null,
    status: TrackingDataProps[] | null
  ) => {
    setActiveCardIndex(index);
    setLongStart(startLongitude);
    setLatStart(startLatitude);
    setLongEnd(endLongitude);
    setLatEnd(endLatitude);
    setMapStatus(status ? "Moving" : "Idle");
  };

  const handleSegmentControlChange = (value: string) => {
    setSegmentControlValue(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setActiveCardIndex(null);
  };

  const filteredData = data
    ? data.filter((item) => {
        const vehicleName = item.vehicleName.toLowerCase();
        const matchesSearchQuery = vehicleName.includes(
          searchQuery.toLowerCase()
        );
        const matchesStatus =
          segmentControlValue === "All" ||
          (segmentControlValue === "Moving"
            ? item.vehicleStatus
            : !item.vehicleStatus);

        return matchesSearchQuery && matchesStatus;
      })
    : [];

  return (
    <Grid className={classes.gridMain} gutter="lg">
      <Grid.Col lg={4} md={12} className={classes.gridColLeft}>
        <Group>
          <TextInput
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="md"
            value={searchQuery}
            onChange={handleSearchChange}
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.black}
                variant="filled"
              >
                {theme.dir === "ltr" ? (
                  <IconArrowRight size="1.1rem" stroke={1.5} />
                ) : (
                  <IconArrowLeft size="1.1rem" stroke={1.5} />
                )}
              </ActionIcon>
            }
            placeholder="Search Vehicles"
            rightSectionWidth={42}
          />
          <SegmentedControl
            radius="xl"
            size="md"
            data={["All", "Idle", "Moving"]}
            value={segmentControlValue}
            onChange={handleSegmentControlChange}
          />
        </Group>
        <Container className={classes.vehicleList}>
          {filteredData.length > 0 ? (
            filteredData.map((item: any, index: number) => {
              const uniqueKey = `${item.vehicleName}-${item.vehicleType}`;
              return (
                <div
                  onClick={() =>
                    handleCardClick(
                      index,
                      item.startLatitude,
                      item.startLongitude,
                      item.endLatitude,
                      item.endLongitude,
                      item.vehicleStatus
                    )
                  }
                  key={uniqueKey}
                >
                  <VehicleCard
                    title={item.vehicleName}
                    type={item.vehicleType}
                    status={item.vehicleStatus}
                    longitude={item.startLongitude}
                    latitude={item.startLatitude}
                    active={index === activeCardIndex}
                    onClick={() => setActiveCardIndex(index)}
                  />
                </div>
              );
            })
          ) : (
            <Center>
              <p>No matching vehicles found</p>
            </Center>
          )}
        </Container>
      </Grid.Col>
      <Grid.Col lg={8} md={12} className={classes.gridColRight}>
        <Map
          longStart={longStart || []}
          latStart={latStart || []}
          status={mapStatus === "Moving"}
          longEnd={longEnd || []}
          latEnd={latEnd || []}
        />
      </Grid.Col>
    </Grid>
  );
}

export default Dashboard;
