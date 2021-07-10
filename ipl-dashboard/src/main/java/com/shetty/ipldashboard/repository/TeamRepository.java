package com.shetty.ipldashboard.repository;

import com.shetty.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long>{
    Team findByTeamName(String teamName);
}
