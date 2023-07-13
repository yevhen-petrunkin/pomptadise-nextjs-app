import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const DesktopNavigation = ({ providers }) => {
  const { data: session } = useSession();

  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Prompt
          </Link>
          <button className="outline_btn" type="button" onClick={signOut}>
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              src={session?.user.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
            />
          </Link>
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

export default DesktopNavigation;
