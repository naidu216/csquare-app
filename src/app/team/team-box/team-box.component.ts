import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../shared/model/e-commerce/team.model';
import { TeamService } from '../../shared/service/e-commerce/team.service';

@Component({
  selector: 'app-team-box',
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.scss']
})
export class TeamBoxComponent implements OnInit {
  @Input() teams: Team;
 public team           :   Team = {};

  constructor(public teamService: TeamService,) { }

  ngOnInit() {
  }

}
