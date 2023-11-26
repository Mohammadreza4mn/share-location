import { LocationDetails } from "@store/location/type";

interface Props {
  onSubmit: (data: LocationDetails) => void;
  initialData?: LocationDetails;
}

interface Form {
  name: { value: string };
  type: { value: string };
  logo: { files: MediaSource[] };
}

export type { Props, Form };
