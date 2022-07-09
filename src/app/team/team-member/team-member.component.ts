import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router} from '@angular/router';
import { Team } from '../../shared/model/e-commerce/team.model';
import { TeamService } from '../../shared/service/e-commerce/team.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  public team            :  Team = {};
  public teams   :    Team[] = [];
  public items        :   Team[] = [];
  public allItems     :   Team[] = [];
 
  constructor(private route: ActivatedRoute, private router: Router,
    public teamService: TeamService, private modalService: NgbModal) {
      this.route.params.subscribe(params => {
        const id = +params['id'];
        this.teamService.getTeam(id).subscribe(team => this.team = team)
      });
     }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbara');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }  
}
