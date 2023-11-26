import styles from "./styles";
import { Props } from "./type";

export default function Button(props: Props) {
  const style = styles(props.color, props.width);

  const className = `${style.main} ${props.className}`;

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}
