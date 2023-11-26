import "leaflet/dist/leaflet.css";
import { icon, Marker as MyMarker } from "leaflet";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import { IMapEvent, Props } from "./interface";
import Button from "@components/button";
import { Link } from "react-router-dom";
import { LocationDetails, Position } from "@store/location/type";
import styles from "./styles";

MyMarker.prototype.options.icon = icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

const defaultLocation = [35.680167363485566, 51.406402587890625] as Position;

function MapEvent(props: IMapEvent) {
  const map = useMapEvent("click", (event) => {
    const { latlng } = event;
    const position = [latlng["lat"], latlng["lng"]] as Position;

    map.setView(position, map.getZoom());
    props.handlerSelectedLocation(position);
  });

  const zoomAmount = map._zoom ?? 6;

  const framing = useMap();

  framing.setView(props.selectedPosition, zoomAmount);

  return null;
}

function CustomMarker(props: LocationDetails) {
  const style = styles();

  const srcImg = URL.createObjectURL(props.logo);

  return (
    <Marker position={props.location}>
      <Popup>
        <div className={style.popup}>
          <span>Name: {props.name}</span>
          <span>Type: {props.type}</span>
          <img src={srcImg} />
          <Button width="medium" color="blue">
            <Link className="!text-white" to={`edit/${props.id}`}>
              Edit details
            </Link>
          </Button>
        </div>
      </Popup>
    </Marker>
  );
}

export default function Map(props: Props) {
  const [selectedPosition, setSelectedPosition] = useState<Position>(
    props.defaultValue || defaultLocation
  );

  const handleSelectedLocation = (location: Position) => {
    if (!props.hasSelectPosition) return;

    props.handleSelectedLocation?.(location);
    setSelectedPosition(location);
  };

  return (
    <MapContainer className="w-full h-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.markerList?.map((item) => (
        <CustomMarker {...item} key={item.id} />
      ))}

      {props.hasSelectPosition && <Marker position={selectedPosition} />}
      <MapEvent
        selectedPosition={selectedPosition}
        handlerSelectedLocation={handleSelectedLocation}
      />
    </MapContainer>
  );
}
