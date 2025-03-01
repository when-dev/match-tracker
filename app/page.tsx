"use client";

import Header from "@/app/components/Header";
import MatchList from "@/app/components/MatchList";
import { useEffect } from "react";
import { useMatchStore } from "@/app/store/useMatchStore";

export default function Home() {
  const { fetchMatches } = useMatchStore();

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen bg-[#06080C] text-white p-6">
      <Header />
      <MatchList />
    </div>
  );
}
