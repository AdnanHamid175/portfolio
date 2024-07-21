import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: "",
  category: "",
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
