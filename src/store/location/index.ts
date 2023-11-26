import { create } from "zustand";
import { State, Actions } from "./type";

const useLocationStore = create<State & Actions>((set) => ({
  locationList: [],
  addLocation: (newLocation) =>
    set((state) => ({ locationList: [...state.locationList, newLocation] })),
  editLocation: (data) =>
    set((state) => {
      const newState = state.locationList.map((item) =>
        item.id === data.id ? (item = data) : item
      );

      return { locationList: newState };
    }),
}));

export default useLocationStore;
