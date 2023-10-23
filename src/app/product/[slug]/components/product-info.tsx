"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, totalPrice, description, discountPercentage },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-cl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        <DiscountBadge>
          {discountPercentage}
        </DiscountBadge>
      </div>
      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="rounded-lg bg-accent flex items-center px-5 py-2 mt-5 justify-between">
        <div className="flex items-center gap-3">
            <TruckIcon />
            <div className="flex flex-col">
                <p className="text-xs">Entrega via <span className="font-bold">LCPacket®</span></p>
                <p className="text-[#8162FF] text-xs">Envio para <span className="font-bold">todo Brasil</span></p>
            </div>
        </div>
        <p className="font-bold text-xs">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
