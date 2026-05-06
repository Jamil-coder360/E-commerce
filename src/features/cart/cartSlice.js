import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartList:
		localStorage.getItem("cartList") ?
			JSON.parse(localStorage.getItem("cartList"))
		:	[],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// setItem('cartList', JSON.stringify([...state.cartList, action.payload]));
			// set local storage
			localStorage.setItem(
				"cartList",
				JSON.stringify([...state.cartList, action.payload]),
			);
			state.cartList = [...state.cartList, action.payload];
		},
		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const item = state.cartList.find((item) => item.id === id);
			if (item) {
				item.quantity = quantity;
				localStorage.setItem("cartList", JSON.stringify(state.cartList));
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;