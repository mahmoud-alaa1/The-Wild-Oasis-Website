"use client";
import { useSession } from "next-auth/react";
function WelcomeAccount() {
  const session = useSession();
  console.log(session);
  return <h2 className="font-semibold text-2xl text-accent-400 mb-7">Welcome, {session?.data?.user?.name} </h2>;
}

export default WelcomeAccount;
