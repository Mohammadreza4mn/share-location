type Position = [number, number];

interface LocationDetails {
  name: string;
  type: string;
  logo: MediaSource;
  id: string;
  location: Position;
}

interface State {
  locationList: LocationDetails[];
}

type Actions = {
  addLocation: (_newLocation: LocationDetails) => void;
  editLocation: (_data: LocationDetails) => void;
};

export type { Position, LocationDetails, State, Actions };
