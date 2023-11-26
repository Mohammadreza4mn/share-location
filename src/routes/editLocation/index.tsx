import ShareLocation from "@components/form/shareLocation";
import useLocationStore from "@store/location";
import { LocationDetails } from "@store/location/type";
import { useParams } from "react-router-dom";

export default function EditLocation() {
  const { id } = useParams();
  const { locationList, editLocation } = useLocationStore();

  const locationSelected = locationList.find((item) => item.id === id);

  const handleSubmit = (data: LocationDetails) => {
    editLocation(data);
  };

  return (
    <ShareLocation initialData={locationSelected} onSubmit={handleSubmit} />
  );
}
