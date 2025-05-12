import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

const createRoutingMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [L.latLng(38.9072, -77.036), L.latLng(37.7749, -122.4194)],
    lineOptions: {
      styles: [
        {
          color: "#757de8",
        },
      ],
      extendToWaypoints: false,
      missingRouteTolerance: 10,
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
