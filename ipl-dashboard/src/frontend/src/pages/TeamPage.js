import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";

export const TeamPage = () => {
  let [team, setTeam] = useState({ matches: [] });
  let { teamName } = useParams();
  console.log({ teamName });
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team Not Found</h1>;
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="wins-loss-section">
        <PieChart
          data={[
            
            { title: "Losses", value: team.totalMatches-team.totalWins, color: "#900C3F" },
            { title: "Wins", value: team.totalWins, color: "#4da340" }
          ]}/>
        Wins/Losses
      </div>

      <div className="match-detail-section">
        <h1>Latest Matches</h1>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard teamName={team.teamName} match={match} />
      ))}

      <div className="more-link">
        <a href="#"> More </a>
      </div>
    </div>
  );
};
