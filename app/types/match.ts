export interface Team {
  name: string;
}

export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: "Scheduled" | "Ongoing" | "Finished";
}
