import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { cartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(cartContext);

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        variant={"outline"}
        className="w-fit gap-1 border-2 px-3 py-[0.375rem] text-base uppercase"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Nenhum produto adicionado ao carrinho.
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-3">
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subTotal.toFixed(2)}</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p> - R$ {totalDiscount.toFixed(2)}</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        <Separator />
        <Button className="uppercase font-bold mt-7">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Cart;
