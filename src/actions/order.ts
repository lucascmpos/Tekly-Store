"use server"

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

export const createOrder = async (
  cartProducts: CartProduct[],
  userId: string,
) => {
  const order = await prismaClient.order.create({ // Use createOne em vez de create
    data: {
      userId,
      status: "WAITING_FOR_PAYMENT",
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });

  return order;
};
