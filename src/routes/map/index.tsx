import useLocationStore from "@store/location";
import Map from "@components/map";

export default function MapLocation() {
  const { locationList } = useLocationStore();

  return (
    <div className="w-[600px] h-[600px]">
      <Map markerList={locationList} />
    </div>
  );
}
