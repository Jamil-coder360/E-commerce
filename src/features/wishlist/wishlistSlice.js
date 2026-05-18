import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	wishList:
		localStorage.getItem("wishList") ?
			JSON.parse(localStorage.getItem("wishList"))
		:	[],
};

export const wishSlice = createSlice({
	name: "wish",
	initialState,
	reducers: {
		addTowish: (state, action) => {
			// setItem('wishList', JSON.stringify([...state.wishList, action.payload]));
			// set local storage
			localStorage.setItem(
				"wishList",
				JSON.stringify([...state.wishList, action.payload]),
			);
			state.wishList = [...state.wishList, action.payload];
		},
		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const item = state.wishList.find((item) => item.id === id);
			if (item) {
				item.quantity = quantity;
				localStorage.setItem("wishList", JSON.stringify(state.wishList));
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTowish, updateQuantity } = wishSlice.actions;

export default wishSlice.reducer;