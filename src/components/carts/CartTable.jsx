import React, { use, useEffect, useState } from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import Cart_1 from "../../assets/remote.svg";
import Cart_2 from "../../assets/tv.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../../features/cart/cartSlice";

const CartTable = () => {
	const dispatch = useDispatch();
	const { cartList } = useSelector((state) => state.cart);
  const subtotal = cartList.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)


	const handleIncrement = (id) => {
		const item = cartList.find((item) => item.id === id);
		if (item && (item.quantity || 1) < 10) {
			dispatch(updateQuantity({ id, quantity: (item.quantity || 1) + 1 }));
		}
	};
	const handleDecrement = (id) => {
		const item = cartList.find((item) => item.id === id);
		if (item && (item.quantity || 1) > 1) {
			dispatch(updateQuantity({ id, quantity: (item.quantity || 1) - 1 }));
		}
	};

	return (
		<Section>
			<Container>
				<div className="flex items-center gap-2 justify-start">
					<Link to="/" className="text-slate-300">
						Home
					</Link>
					<span className="text-slate-300">/</span>
					<Link to="/cart" className="text-800">
						Cart
					</Link>
				</div>
				<div className="w-full space-y-10 mt-10.5">
					<table className="w-full">
						<tr className="text-black text-[16px] pl-10 pr-15 py-6 shadow-sm rounded-md">
						<td className="px-5 h-18">Product</td>
						<td className="px-5 h-18">Price</td>
						<td className="px-5 h-18 text-center">Quantity</td>
						<td className="px-5 h-18 text-right">Subtotal</td>
						</tr>
						{cartList.map((item) => (
							<tr className="text-black text-[16px] pl-10 pr-15 py-6 shadow-sm rounded-md">
								<td className="px-5 h-18">
									<div className="flex items-center gap-2">
										<div className="w-14 h-14 overflow-hidden">
											<img
												src={item.thumbnail}
												alt="image"
												className="h-full"
											/>
										</div>
										<p>{item.title}</p>
									</div>
								</td>
								<td className="px-5 h-18">${item.price}</td>
								<td className="px-5 h-18 text-center flex items-center justify-center ">
									<div className="border p-1 w-18 h-12 rounded flex items-center gap-1 justify-between">
									<span className="mx-2">{item.quantity || 1}</span>
									<div className="flex flex-col">
										<button
											className="cursor-pointer"
											onClick={() => handleIncrement(item.id)}
										>
											<ChevronUp size={16} />
										</button>
										<button
											className="cursor-pointer"
											onClick={() => handleDecrement(item.id)}
											>
												<ChevronDown size={16} />
											</button>
										</div>
									</div>
								</td>
								<td className="px-5 h-18 text-right">
									${(item.price * (item.quantity || 1)).toFixed(2)}
								</td>
							</tr>
						))}
					</table>
				</div>
				<div className="flex justify-between items-center mt-6 pb-10">
					<Link to={"/product"}>

					<button className=" text-black py-4 px-12 rounded-md border border-gray-500 cursor-pointer">
						Return To Shop
					</button>
					</Link>
					<button className=" text-black py-4 px-12 rounded-md border border-gray-500 cursor-pointer">
						Update Cart
					</button>
				</div>
			</Container>
		</Section>
	);
};

export default CartTable;
