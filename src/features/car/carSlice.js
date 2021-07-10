import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};
const carSlice = createSlice({
  name: "car",
  initialState, //always have initial
  reducers: {}, //alwAYS HAVE
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
