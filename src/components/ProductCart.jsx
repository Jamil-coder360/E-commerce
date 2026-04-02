// import { StarIcon, EyeIcon, HeartIcon } from "./icons";
import { Link } from "react-router";
import WishlistIcon from "./Icons.jsx/WishlistIcon";
import StarIcon from "./Icons.jsx/StarIcon";
import EyeIcon from "./Icons.jsx/EyeIcon";

	const ProductCard = ({ product }) => {
	return (
		<div className="overflow-hidden w-[270px]">
			<div className="bg-F5F5F5 rounded-sm flex items-center justify-center p-4 relative group">
				
				{product.discount && (
					<span className="absolute top-4 left-4 z-10 bg-[#DB4444] text-white rounded-xs inline-block py-1 px-2">
						-{product.discount}%
					</span>
				)}

				<img src={product.image} alt={product.name} />

				<div className="space-y-4 absolute top-4 right-4 z-10 flex flex-col gap-1">
					<button><WishlistIcon /></button>
					<button><EyeIcon /></button>
				</div>

				<button className="flex justify-center text-white bg-black absolute w-full px-2 py-2 bottom-1 group-hover:bottom-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
					Add To Cart
				</button>
			</div>

			<div className="pt-4">
				<h4 className="text-black font-medium">{product.name}</h4>

				<p className="py-2">
					<span className="text-secondary">${product.price}</span>{" "}
					<del>${product.oldPrice}</del>
				</p>

				<div className="flex justify-between items-center gap-3">
					<ul className="flex gap-2 items-center">
						{[...Array(product.rating)].map((_, i) => (
							<li key={i}>
								<StarIcon className="text-gold" />
							</li>
						))}
					</ul>
					<span>({product.reviews})</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
