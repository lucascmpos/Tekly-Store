import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function OrderPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="text-lg font-bold lg:text-3xl">
          Você ainda não fez login!
        </h2>
        <p className="text-base text-muted-foreground lg:text-xl">
          Faça o{" "}
          <Link
            href={`/api/auth/signin`}
            className="text-primary  hover:underline"
          >
            login
          </Link>{" "}
          para ver seus pedidos.
        </p>
      </div>
    );
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="p-5 lg:container lg:mx-auto lg:py-10">
      <Badge variant="outline" className="gap-2">
        <PackageSearchIcon size={16} />
        MEUS PEDIDOS
      </Badge>

      <div className="mt-5 flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
