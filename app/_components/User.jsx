"use client";
import Link from "next/link";
import SpinnerMini from "./SpinnerMini";
import Image from "next/image";
import { useSession } from "next-auth/react";

function User() {
  const session = useSession();

  if (session?.loading) return <SpinnerMini />;

  return (
    <>
      {session?.data?.user?.image ? (
        <Link href="/account" className="hover:text-accent-400 transition-colors flex items-center gap-4">
          <div className="flex relative h-8 aspect-square">
            <Image
              className="h-8 rounded-full object-cover"
              src={session.data.user.image}
              alt={session.data.user.name}
              referrerPolicy="no-referrer"
              fill
              sizes="8"
            />
          </div>
          <span>{session.data.user.name}</span>
        </Link>
      ) : (
        <Link href="/account" className="hover:text-accent-400 transition-colors">
          Guest area
        </Link>
      )}
    </>
  );
}

export default User;
