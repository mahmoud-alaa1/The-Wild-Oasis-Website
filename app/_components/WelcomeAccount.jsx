"use client";
import { useSession } from "next-auth/react";
import { useAuth } from "../context/AuthContext";
function WelcomeAccount() {
  const session = useAuth();
  console.log(session);
  return <h2 className="font-semibold text-2xl text-accent-400 mb-7">Welcome, {session?.user?.name} </h2>;
}

export default WelcomeAccount;
