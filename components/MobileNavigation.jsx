"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MobileNavigation = ({ providers }) => {
  const { data: session } = useSession();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="flex">
          <Image
            src={session?.user.image}
            alt="profile"
            width={37}
            height={37}
            className="rounded-full cursor-pointer"
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          />
          {dropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => {
                  setDropdown(false);
                }}
              >
                Create Prompt
              </Link>
              <button
                className="mt-5 w-full black_btn"
                type="button"
                onClick={() => {
                  setDropdown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                key={provider.name}
                className="black_btn"
                type="button"
                onClick={() => signIn(provider.id)}
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default MobileNavigation;
