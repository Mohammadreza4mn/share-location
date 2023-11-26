import { StyleProps } from "./type";

const colors = {
  blue: "bg-blue-500",
  gray: "bg-gray-500",
};

const widths = {
  medium: "w-28",
  full: "w-full",
};

const styles = (
  color: StyleProps<typeof colors>,
  width: StyleProps<typeof widths>
) => ({
  main: `focus:outline-none h-12 text-white rounded-lg ${colors[color]} ${widths[width]}`,
});

export default styles;
