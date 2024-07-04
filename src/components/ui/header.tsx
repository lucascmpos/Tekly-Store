"use client";

import {
  ArrowDown,
  ArrowDownLeft,
  ChevronDown,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
import { cartContext } from "@/providers/cart";
import { useContext } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  const { products } = useContext(cartContext);

  const cartQuantityItems = products.length;

  return (
    <Card className="flex  items-center justify-between p-[1.875rem] lg:justify-around">
      <div className="flex items-center justify-between lg:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>

                <Separator />
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              )}

              <SheetClose asChild>
                <Link href={"/"}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearchIcon size={16} />
                    Meus pedidos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={"/deals"}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>

              {status === "authenticated" && (
                <SheetClose asChild>
                  <Button
                    onClick={handleLogoutClick}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogOutIcon size={16} />
                    Sair
                  </Button>
                </SheetClose>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="   text-primary">Tekly</span> Store
        </h1>
      </Link>

      <div className="hidden justify-center gap-2  lg:flex lg:flex-row">
        <Link href={"/"}>
          <Button variant="outline" className="w-full justify-start gap-2">
            <HomeIcon size={16} />
            Início
          </Button>
        </Link>

        <Link href={"/deals"}>
          <Button variant="outline" className="w-full justify-start gap-2">
            <PercentIcon size={16} />
            Ofertas
          </Button>
        </Link>

        <Link href="/catalog">
          <Button variant="outline" className="w-full justify-start gap-2">
            <ListOrderedIcon size={16} />
            Catálogo
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className=" hidden items-center gap-2 lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              {status === "authenticated" && data?.user && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 py-6"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>

                  <ChevronDown />
                </Button>
              )}

              {status === "unauthenticated" && (
                <Button variant="outline" className="w-fit p-2 py-6">
                  <UserIcon size={26} />
                  <ChevronDown />
                </Button>
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer login
                </Button>
              )}
              <Link href="/orders">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PackageSearchIcon size={16} />
                  Meus pedidos
                </Button>
              </Link>

              {status === "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon size={16} />
                  Sair
                </Button>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="relative  py-6">
              {cartQuantityItems > 0 && (
                <span className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)] flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-sm font-bold">
                  {cartQuantityItems}
                </span>
              )}
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[280px] max-w-[280px] lg:w-[600px] lg:max-w-[600px] ">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
