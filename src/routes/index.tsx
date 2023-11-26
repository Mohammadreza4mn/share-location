import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "@components/navbar";
import AddLocation from "./addLocation";
import MapLocation from "./map";
import EditLocation from "./editLocation";

export default function Index() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        { path: "/", element: <MapLocation /> },
        { path: "add", element: <AddLocation /> },
        { path: "edit/:id", element: <EditLocation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
