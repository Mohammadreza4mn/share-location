import ShareLocation from "@components/form/shareLocation";
import useLocationStore from "@store/location";
import { LocationDetails } from "@store/location/type";

export default function AddLocation() {
  const { addLocation } = useLocationStore();

  const handleSubmit = (data: LocationDetails) => {
    addLocation(data);
  };

  return <ShareLocation onSubmit={handleSubmit} />;
}
