import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { TrackingDataProps } from "../utils";
import L from "leaflet";
import { useEffect, useState } from "react";

const Map = (props: {
  longStart: TrackingDataProps[];
  latStart: TrackingDataProps[];
  status: boolean;
  longEnd: TrackingDataProps[];
  latEnd: TrackingDataProps[];
}) => {
  const { longStart, latStart, status, longEnd, latEnd } = props;
  const [map, setMap] = useState(null);
  const customIconUrl =
    status === false ? "/marker-idle.svg" : "/marker-moving.svg";

  const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [32, 32],
  });

  const StartCoords = L.latLng(+longStart, +latStart);
  const EndCoords = L.latLng(+longEnd, +latEnd);

  function LocationMarker() {
    const [positionStart, setPositionStart] =
      useState<L.LatLngExpression | null>(null);
    const [positionEnd, setPositionEnd] = useState<L.LatLngExpression | null>(
      null
    );
    const map = useMapEvents({
      locationfound() {
        setPositionStart(StartCoords);
        setPositionEnd(EndCoords);
        map.flyTo(StartCoords, 2);
      },
    });
    useEffect(() => {
      map.locate();
    });

    return positionStart === null ? null : positionEnd === null ? null : (
      <>
        <Marker position={positionStart} icon={customIcon}>
          <Popup>You are here</Popup>
        </Marker>
        {/* {status === true && (
          <Marker position={positionEnd} icon={customIcon}>
            <Popup>You are going here.</Popup>
          </Marker>
        )} */}
      </>
    );
  }

  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={{ lat: -109.4521, lng: 66.3713 }}
      zoom={5}
      scrollWheelZoom={false}
      whenReady={() => setMap(map)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {/* Enable this if you want to see the start and end destination  */}
      {/* <RoutingMachine /> */}
    </MapContainer>
  );
};

export default Map;
