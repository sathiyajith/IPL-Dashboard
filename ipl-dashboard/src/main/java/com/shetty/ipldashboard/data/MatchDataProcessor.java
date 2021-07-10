package com.shetty.ipldashboard.data;

import java.time.LocalDate;

import com.shetty.ipldashboard.model.Match;


import org.springframework.batch.item.ItemProcessor;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {


  @Override
  public Match process(final MatchInput matchInput) throws Exception {

    Match match = new Match();

    match.setId(Long.parseLong(matchInput.getId()));
    match.setCity(matchInput.getCity());
    match.setDate(LocalDate.parse(matchInput.getDate()));
    match.setPlayerOfMatch(matchInput.getPlayer_of_match());
    match.setVenue(matchInput.getVenue());

    String firstInningsTeam, secondInningsTeam;

    if ("bat".equals(matchInput.getToss_decision()))
    {
        firstInningsTeam = matchInput.getToss_winner();
        secondInningsTeam = matchInput.getTeam1().equals(matchInput.getToss_winner()) ?
                    matchInput.getTeam1() : matchInput.getTeam2();
    }
    else{
        secondInningsTeam = matchInput.getToss_winner();
        firstInningsTeam = matchInput.getTeam1().equals(matchInput.getToss_winner()) ?
                    matchInput.getTeam1() : matchInput.getTeam2();
    }

    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);
    match.setTossWinner(matchInput.getToss_winner());
    match.setTossDecision(matchInput.getToss_decision());
    match.setMatchWinner(matchInput.getMatchWinner());
    match.setResult(matchInput.getResult());
    match.setResultMargin(matchInput.getResultMargin());
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());



    return match;

  }

}