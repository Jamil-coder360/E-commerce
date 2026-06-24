import React from "react";
import Section from "../section/Section";
import Container from "../section/Container";
import { Link } from "react-router";
import Button from "../Button";
import { useSelector } from "react-redux";

const CartTotal = () => {
const { cartList } = useSelector((state) => state.cart);
 
const subtotal = cartList.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

let shipping=120;
const total = shipping + subtotal;


	return (
		<Section className="pb-35">
			<Container>
				<div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
					<div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-start">
						<input
							type="text"
							placeholder="Coupon Code"
							className="w-full max-w-xs py-4 pl-6 border border-gray-500"
						/>
						<Button TagName={Link} href="/checkout" className="">
							Apply Coupon
						</Button>
					</div>
					<div className="w-full border border-gray-500 xl:max-w-117.5">
						<div className="px-6">
							<h3 className="pt-8 font-medium text-[20px] space-y-4">
								Cart Total
							</h3>
							<div className="pt-4 text-black text-[16px]">
								<div className="flex justify-between border-b border-gray-500 py-4">
									<span>Subtotal</span>
									<span>{subtotal.toLocaleString()}</span>
								</div>
								<div className="flex justify-between border-b border-gray-500 py-4">
									<span>Shipping</span>
									<span>{shipping.toLocaleString() || "free"}</span>
								</div>
								<div className="flex justify-between py-4">
									<span>Total</span>
									<span>${total.toLocaleString()}</span>
								</div>
								<div className="flex justify-center pb-10">
									<Button
										TagName={Link}
										href="/checkout"
										className="mt-4 mb-8 "
									>
										Proceed To Checkout
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default CartTotal;
