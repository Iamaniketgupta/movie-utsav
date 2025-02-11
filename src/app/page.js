"use client"
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/page/Home"), { ssr: false });

export default function Home() {
  return <HomePage />;
}
