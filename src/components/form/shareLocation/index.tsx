import Button from "@components/button";
import styles from "./styles";
import Input from "@components/input";
import { Form, Props } from "./type";
import { FormEvent, useState } from "react";
import Map from "@components/map";
import { Position } from "@store/location/type";
import { useNavigate } from "react-router-dom";

const locationTypeList = [
  "Home",
  "School",
  "Office",
  "Coffee shop",
  "Library",
].map((item) => ({ value: item, label: item }));

export default function ShareLocation(props: Props) {
  const style = styles();

  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<Position>();

  const goToHome = () => navigate("/");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & Form;

    const data = {
      name: target.name.value,
      type: target.type.value,
      logo: props.initialData?.logo || target.logo.files[0],
      location: props.initialData?.location || (selectedLocation as Position),
      id: props.initialData?.id || crypto.randomUUID(),
    };

    if (Object.values(data).some((item) => !item)) {
      alert("all fields required");
      return;
    }

    props.onSubmit(data);

    goToHome();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.main}>
        <h3 className={style.title}>Share location</h3>
        <div className={style.containerInput}>
          <Input.Label label="location name:" name="name">
            <Input.Text defaultValue={props.initialData?.name} />
          </Input.Label>

          <Input.Label label="location on map:" name="location">
            <div className="w-[390px] h-[200px]">
              <Map
                hasSelectPosition
                handleSelectedLocation={setSelectedLocation}
                defaultValue={props.initialData?.location}
              />
            </div>
          </Input.Label>

          <Input.Label label="location type:" name="type">
            <Input.Select
              option={locationTypeList}
              defaultValue={props.initialData?.type}
            />
          </Input.Label>

          <Input.Label label="Logo:" name="logo">
            <Input.File />
          </Input.Label>
        </div>
      </div>

      <div className={style.containerButton}>
        <Button color="gray" width="medium" type="reset" onClick={goToHome}>
          Cancel
        </Button>
        <Button color="blue" width="medium" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
