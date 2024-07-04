import React from "react";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-accent px-8 py-4 text-[0.625rem] opacity-75  lg:text-sm">
      <div className="container mx-auto flex w-full items-center justify-between">
        <p>
          © 2023 Copyright <span className="font-semibold">Tekly Store</span>{" "}
        </p>

        <a
          className="flex flex-row items-center justify-center gap-2 hover:underline"
          href="https://github.com/lucascmpos/PeriWare-Store"
          target="_blank"
        >
          <p>Feito por Lucas Campos</p>
          <IoLogoGithub size={18} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
