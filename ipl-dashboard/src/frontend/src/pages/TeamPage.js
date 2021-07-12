import { React, useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {

    let [team, setTeam] = useState({matches:[]});
    let { teamName } = useParams();
    console.log({teamName});
    useEffect(
        () =>{

            const fetchMatches = async () =>{
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json(); 
                setTeam(data);
                
            };
            fetchMatches();
        }, []
    );

    if (!team || !team.teamName)
    {
      return <h1>Team Not Found</h1>;
    }
  return (
    <div className="TeamPage">
      <h1>{team.id}</h1>
        <MatchDetailCard teamName= {team.teamName} match = {team.matches[0]}/>

        {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match= {match}/>)}
    </div>
  );
}

