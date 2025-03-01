import { Match } from "@/app/types/match";
import Image from "next/image";
import teamLogo from '@/public/images/team-logo.svg'

interface MatchItemProps {
  match: Match;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Ongoing":
      return "bg-[#43AD28]";
    case "Finished":
      return "bg-[#EB0237]";
    case "Scheduled":
      return "bg-[#EB6402]";
    default:
      return "bg-gray-500";
  }
};

export default function MatchItem({ match }: MatchItemProps) {
  return (
    <div className="p-3 md:p-4 bg-[#0B0E12] rounded shadow-md mb-3 flex justify-between items-center">
      <div className="flex items-center space-x-2 md:space-x-3 w-1/4 justify-start">
        <Image src={teamLogo} alt="Team Logo" width={24} height={24} />
        <span className="text-white font-semibold text-sm md:text-base">{match.homeTeam.name}</span>
      </div>

      <div className="flex flex-col items-center w-1/4">
        <span className="text-base md:text-lg font-bold text-white">
          {match.homeScore} : {match.awayScore}
        </span>
        <span className={`px-2 py-0.5 text-xs md:text-sm text-white rounded ${getStatusColor(match.status)}`}>
          {match.status}
        </span>
      </div>

      <div className="flex items-center space-x-2 md:space-x-3 w-1/4 justify-end">
        <span className="text-white font-semibold text-sm md:text-base">{match.awayTeam.name}</span>
        <Image src={teamLogo} alt="Team Logo" width={24} height={24} />
      </div>
    </div>
  );
}
