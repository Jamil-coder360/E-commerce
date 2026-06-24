import React, { useEffect, useState } from "react";
import Section from "../components/section/Section";
import Container from "../components/section/Container";
import HeartIcon from "../components/Icons/WishlistIcon";
import StarIcon from "../components/Icons/StarIcon";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import ProductCard from "../components/ProductCart";
import delivery from "../assets/icons/icon-delivery.png";
import preturn from "../assets/icons/icon-return.png";
import { FlashSellingProductsData } from "../data";
import SectionHeader from "../components/section/SectionHeader";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		if (!id) return;

		setLoading(true);
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data?.id ? data : null);
				setLoading(false);
			})
			.catch(() => {
				setProduct(null);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
			<Section className="pb-35 pt-20">
				<Container>
					<div className="text-center py-20 text-black/70">Loading product details...</div>
				</Container>
			</Section>
		);
	}

	if (!product) {
		return (
			<Section className="pb-35 pt-20">
				<Container>
					<div className="text-center py-20 text-black/70">Product not found.</div>
				</Container>
			</Section>
		);
	}

	const images = Array.isArray(product.images) && product.images.length > 0 ? product.images : [Image1, Image2, Image3];
	const mainImage = product.thumbnail || images[0];
	const stockText = product.stock > 0 ? "In Stock" : "Out of Stock";
	const stockClass = product.stock > 0 ? "text-[#00FF66]" : "text-red-500";

	return (
		<Section className="pb-35 pt-20">
			<Container>
				<div className="flex items-center gap-2 justify-start pb-20">
					<span className="text-slate-300">Home</span>
					<span className="text-slate-300">/</span>
					<span className="text-slate-300">{product.category}</span>
					<span className="text-slate-300">/</span>
					<span className="text-slate-800">{product.title}</span>
				</div>
				<div className="grid gap-6 grid-cols-1 lg:grid-cols-[170px_minmax(0,1fr)_auto] pb-35">
					<div className="flex flex-row lg:flex-col gap-4 w-full lg:w-42.5 overflow-x-auto lg:overflow-visible">
						{images.slice(0, 4).map((image, index) => (
							<div key={index} className="min-w-33.75 lg:w-42.5 h-36 rounded bg-F5F5F5 flex items-center justify-center overflow-hidden">
								<img className="max-w-full max-h-full object-contain" src={image || Image1} alt={`${product.title} ${index + 1}`} />
							</div>
						))}
					</div>
					<div className="w-full lg:max-w-125 pr-0 lg:pr-8 pl-0 lg:pl-6">
						<div className="rounded overflow-hidden bg-F5F5F5 flex items-center justify-center">
							<img className="w-full h-full max-h-140 object-contain" src={mainImage} alt={product.title} />
						</div>
					</div>
					<div>
						<div>
							<h2 className="text-[24px] font-bold text-[#000000] pb-4">{product.title}</h2>
							<div className="flex items-center flex-wrap gap-2 pb-4">
								<div className="flex items-center gap-1">
									{[...Array(5)].map((_, index) => {
										const value = index + 1;
										if (product.rating >= value) return <StarIcon key={value} type="full" />;
										if (product.rating >= value - 0.5) return <StarIcon key={value} type="half" />;
										return <StarIcon key={value} type="empty" />;
									})}
								</div>
								<span className="text-sm font-normal text-[#000000]/50">{product.rating?.toFixed(1)} / 5</span>
								<span className={`text-sm font-normal pl-4 border-l border-[#000000]/20 ${stockClass}`}>{stockText}</span>
							</div>
							<strong className="text-[24px] font-normal pt-4 text-[#000000]">${product.price.toFixed(2)}</strong>
							<p className="text-[14px] leading-normal font-normal text-[#000000] max-w-93.25 py-6">{product.description}</p>
							<hr className="pb-10 text-[#000000]/50" />
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex items-center gap-6">
								<strong className="text-[20px] font-regular text-[#000000] tracking-[3%]">Colours:</strong>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded-full bg-[#000000] cursor-pointer"></div>
									<div className="w-6 h-6 rounded-full bg-[#FF0000] cursor-pointer"></div>
									<div className="w-6 h-6 rounded-full bg-[#00FF66] cursor-pointer"></div>
								</div>
							</div>
							<div className="flex items-center gap-6">
								<strong className="text-[20px] font-regular text-[#000000] tracking-[3%]">Size:</strong>
								<div className="flex items-center gap-4">
									{["XS", "S", "M", "L", "G"].map((size) => (
										<div key={size} className="w-8 h-8 border border-[#000000]/50 rounded flex items-center justify-center hover:bg-secondary hover:text-white">{size}</div>
									))}
								</div>
							</div>
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
								<div className="flex border rounded">
									<div className="w-10 h-11 border-r border-[#000000]/50 flex items-center justify-center">-</div>
									<span className="w-20 h-11 flex items-center justify-center">2</span>
									<div className="w-10 h-11 border-l border-[#000000]/50 flex items-center justify-center bg-secondary text-white">+</div>
								</div>
								<button className={`text-white py-2.5 px-12 rounded transition duration-300 ${product.stock > 0 ? "bg-secondary" : "bg-gray-400 cursor-not-allowed"}`} disabled={product.stock === 0}>
									{product.stock > 0 ? "Buy Now" : "Out of Stock"}
								</button>
								<div className="w-11 h-11 border border-[#000000]/50 rounded flex items-center justify-center p-2 cursor-pointer"><HeartIcon /></div>
							</div>
							<div className="border border-[#000000]/50 pt-6 rounded">
								<div className="flex items-center gap-4 pb-4 border-b border-[#000000]/50 pl-4">
									<img src={delivery} alt="Delivery Icon" />
									<div className="flex flex-col gap-2">
										<h4 className="text-base font-medium">Free Delivery</h4>
										<p className="text-[12px] leading-normal font-medium">Enter your postal code for Delivery Availability</p>
									</div>
								</div>
								<div className="flex items-center gap-4 pt-4 pb-6 pl-4">
									<img src={preturn} alt="Return Icon" />
									<div className="flex flex-col gap-2">
										<h4 className="text-base font-medium">Return Delivery</h4>
										<p className="text-[12px] leading-normal font-medium">Free 30 Days Delivery Returns. Details</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pb-17.5">
					<SectionHeader subtitle="Related Item" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{FlashSellingProductsData.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default ProductDetailPage;
