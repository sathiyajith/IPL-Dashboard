import { React } from "react";

export const MatchDetailCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  return (
    <div className="MatchDetailCard">
      <h1>Latest Matches</h1>
      <h1> vs {otherTeam}</h1>
      <h1> on {match.date} </h1>
      <h1> at {match.venue} </h1>
      <h1> {match.matchWinner} won by {match.resultMargin} {match.result} </h1>
    </div>
  );
}
