import { CartProduct, cartContext } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(cartContext);

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent lg:h-[120px] lg:w-[120px]">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[80%] w-auto max-w-[70%]"
          />
        </div>
        <div className="flex flex-col gap-1 lg:gap-2">
          <p className="whitespace-nowrap text-xs lg:text-sm">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold lg:text-base">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75 lg:text-sm">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button
              className="h-8 w-8 lg:h-10 lg:w-10"
              size={"icon"}
              variant={"outline"}
              onClick={handleDecreaseQuantityClick}
            >
              <ArrowLeftIcon size={16} />
            </Button>
            <span className="text-xs lg:text-sm">{product.quantity}</span>
            <Button
              className="h-8 w-8 lg:h-10 lg:w-10"
              size={"icon"}
              variant={"outline"}
              onClick={handleIncreaseQuantityClick}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size={"icon"}
        variant={"outline"}
        className="h-8 w-8 lg:h-12 lg:w-12"
        onClick={handleRemoveProductClick}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
