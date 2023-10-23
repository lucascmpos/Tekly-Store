import { CartProduct, cartContext } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity } = useContext(cartContext);
  const { increaseProductQuantity } = useContext(cartContext)

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(product.id);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[80%] w-auto max-w-[70%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="whitespace-nowrap text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button
              className="h-8 w-8"
              size={"icon"}
              variant={"outline"}
              onClick={handleDecreaseQuantityClick}
            >
              <ArrowLeftIcon size={16} />
            </Button>
            <span className="text-xs">{product.quantity}</span>
            <Button
              className="h-8 w-8"
              size={"icon"}
              variant={"outline"}
              onClick={handleIncreaseQuantityClick}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size={"icon"} variant={"outline"}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
