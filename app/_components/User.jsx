"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import SpinnerMini from "./SpinnerMini";
import Image from "next/image";

function User() {
  const session = useAuth();

  if (session?.loading) return <SpinnerMini />;

  return (
    <>
      {session?.user?.image ? (
        <Link href="/account" className="hover:text-accent-400 transition-colors flex items-center gap-4">
          <div className="flex relative h-8 aspect-square">
            <Image
              className="h-8 rounded-full object-cover"
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
              fill
              sizes="8"
            />
          </div>
          <span>Guest area</span>
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
