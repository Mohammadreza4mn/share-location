import { LocationDetails, Position } from "@store/location/type";

interface Props {
  handleSelectedLocation?: (data: Position) => void;
  markerList?: LocationDetails[];
  defaultValue?: Position;
  hasSelectPosition?: boolean;
}

interface IMapEvent {
  handlerSelectedLocation: (data: Position) => void;
  selectedPosition: Position;
}

export type { Props, IMapEvent };
