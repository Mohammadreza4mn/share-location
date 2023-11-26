const width = "w-[24.125rem]";
const height = "h-12";

const styles = () => ({
  Label: "flex items-center justify-between",
  input: `${width} ${height} rounded-lg border border-gray-400 focus:outline-none py-3 px-4 mt-2`,
  select:
    "bg-gray-50 text-gray-900 w-[24.125rem] h-12 rounded-lg border border-gray-400 focus:outline-none py-3 px-4 mt-2",
  file: {
    main: `${width} ${height} flex cursor-pointer relative mt-2`,
    btn: "bg-gray-400 w-full rounded-lg bg-blue-500 h-12 w-28 rounded-lg grid place-content-center text-gray-800 absolute left-0",
  },
});

export default styles;
