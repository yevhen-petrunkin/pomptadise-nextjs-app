"use client";

import { useState, useEffect } from "react";
import { getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Nav = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const obtainProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    obtainProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex-center gap-2">
        <Image
          src="assets/images/logo.svg"
          alt="Promptadise Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptadise</p>
      </Link>

      <DesktopNavigation providers={providers} />

      <MobileNavigation providers={providers} />
    </nav>
  );
};

export default Nav;
