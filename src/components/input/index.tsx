import { cloneElement } from "react";
import { Props, LabelProps, SelectProps } from "./type";
import styles from "./styles";

const style = styles();

function Label(props: LabelProps) {
  return (
    <div className={style.Label}>
      <label htmlFor={props.name}>{props.label}</label>
      {cloneElement(props.children, { name: props.name })}
    </div>
  );
}

function Text(props: Props<HTMLInputElement>) {
  return <input {...props} id={props.name} className={style.input} />;
}

function Select(props: SelectProps) {
  return (
    <select {...props} id={props.name} className={style.select}>
      <option selected disabled hidden>{`Choose a ${props.name}`}</option>
      {props.option.map(({ label, value }) => (
        <option
          key={value}
          value={value}
          selected={value === props.defaultValue}
        >
          {label}
        </option>
      ))}
    </select>
  );
}

function File(props: Props<HTMLInputElement>) {
  return (
    <label className={style.file.main}>
      <input {...props} type="file" className="hidden" />
      <div className={style.file.btn}>📥</div>
    </label>
  );
}

const Input = {
  Label,
  Text,
  Select,
  File,
};

export default Input;
