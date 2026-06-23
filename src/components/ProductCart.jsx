// import { StarIcon, EyeIcon, HeartIcon } from "./icons";
import { Link } from "react-router";
import WishlistIcon from "./Icons/WishlistIcon";
import StarIcon from "./Icons/StarIcon";
import EyeIcon from "./Icons/EyeIcon";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addTowish,deleteWishlistItem } from "../features/wishlist/wishlistSlice";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [active, setActive] = useState();

  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const { wishList } = useSelector((state) => state.wishlist);

  const isCartItem = cartList.find((item) => item.id === product.id);
  const handleCart = () => {
    if (!isCartItem) {
      dispatch(addToCart(product));
    }
  };

  const checkItemAddedInWishlist = (id) =>
    wishList.find((item) => item.id === id);

  const isWishlistItem = checkItemAddedInWishlist(product.id);

  const handleAddToWishlist = (id) => {
    if (isWishlistItem) {
      dispatch(deleteWishlistItem(product.id));
    } else {
      dispatch(addTowish(product));
    }
    console.log(isWishlistItem);
  };

  return (
    <div className="overflow-hidden w-full lg:w-67.5">
      <div className="bg-F5F5F5 rounded-sm flex items-center justify-center p-4 relative group">
        {product.discountPercentage && (
          <span className="absolute top-4 left-4 z-10 bg-secondary text-white rounded-xs inline-block py-1 px-2">
            -{product.discountPercentage}%
          </span>
        )}

        <img src={product.thumbnail || product.image} alt={product.name} />

        <div className="space-y-4 absolute top-4 right-4 z-10 flex flex-col gap-1">
          <button
            onClick={() => {
              handleAddToWishlist(product.id)
              // setActive((prev) => !prev);
            }}
          >
            <WishlistIcon
              className="stroke-black"
              stroke={isWishlistItem ? "red" : "black"}
              fill={isWishlistItem ? "red" : "none"}
            />
          </button>

          <Link to={"product/:id"}>
            <button>
              <EyeIcon />
            </button>
          </Link>
        </div>

        <button
          onClick={handleCart}
          className="flex justify-center text-white bg-black absolute w-full px-2 py-2 bottom-1 group-hover:bottom-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-all"
        >
          {isCartItem ? "AllReady In Cart" : "Add To Cart"}
        </button>
      </div>

      <div className="pt-4">
        <h4 className="text-black font-medium">{product.title}</h4>

        <p className="py-2">
          <span className="text-secondary">${product.price}</span>{" "}
          {/* <del className="text-[#000000]/50">${product.oldPrice}</del> */}
        </p>

        <div className="flex justify-between items-center gap-3">
          <ul className="flex gap-2 items-center">
            {[1, 2, 3, 4, 5].map((i) => {
              if (i <= Math.floor(product.rating)) {
                return <StarIcon key={i} type="full" />;
              } else if (i - product.rating <= 0.5) {
                return <StarIcon key={i} type="half" />;
              } else {
                return <StarIcon key={i} type="empty" />;
              }
            })}
          </ul>
          <span className="text-[#000000]/50">
            {Array.isArray(product.reviews)
              ? `(${product.reviews.length})`
              : `(${product.reviews})`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
