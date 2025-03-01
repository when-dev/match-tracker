"use client";

import { useMatchStore } from "@/app/store/useMatchStore";
import MatchItem from "./MatchItem";

export default function MatchList() {
  const { matches } = useMatchStore();
	console.log(matches);

  return (
    <div className="space-y-4">
      {matches.map((match, index) => (
        <MatchItem key={index} match={match} />
      ))}
    </div>
  );
}
