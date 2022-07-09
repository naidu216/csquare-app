import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router} from '@angular/router';
import { Team } from '../../shared/model/e-commerce/team.model';
import { TeamService } from '../../shared/service/e-commerce/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  public teams   :    Team[] = [];
  constructor(private route: ActivatedRoute, private router: Router,
    public teamService: TeamService, private modalService: NgbModal) { 
      
    }

  ngOnInit() {
  }

}
