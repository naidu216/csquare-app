import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import {ModernTeamMemberComponent} from './team/modern-team-member.component';
import {ServicesComponent} from './services/services.component';
import { AboutComponent } from './about/about.component';
import {ProjectDetailComponent} from './projects/project-detail/project-detail.component';
import { ServDetailComponent } from './services/serv-detail/serv-detail.component';
import { TeamMemberComponent } from './team/team-member/team-member.component';
import { CareerComponent } from './career/career.component';
import {ContactComponent} from './contact/contact.component';
import { CommunityComponent } from './about/community/community.component';
import { PhilosophyComponent } from './about/philosophy/philosophy.component';
import { LabosquareComponent } from './about/labosquare/labosquare.component';
import {TestimonialsComponent} from './about/testimonials/testimonials.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
    data: {
      title: "Home | C Square Group"
    }
  },
 
  { path: 'projects', component: ProjectsComponent,
   data:{ 
     title: "Projects | C Square Group" },
   },
   {
    path: 'projects/project-detail/:id',
    component: ProjectDetailComponent,
    data: {
      title: "Project Detail | C Square Group"
    }
  },
  {
    path: 'team',
    component: ModernTeamMemberComponent,
    data: {
      title: "Team | C Square Group"
    }
  },
  {
    path: 'team/team-member/:id',
    component: TeamMemberComponent,
    data: {
      title: "Team | C Square Group"
    }
  },
  {
    path: 'service',
    component: ServicesComponent
  },
  {
    path: 'service/serv-detail/:id',
    component: ServDetailComponent,
    data: {
      title: "Services | C Square Group"
    }
  },

  {
    path: 'about/profile',
    component: AboutComponent,
    data: {
      title: "Profile | C Square Group"
    }
  },
  {
    path: 'about/philosophy',
    component: PhilosophyComponent,
    data: {
      title: "Philosophy | C Square Group"
    }
  },
  {
    path: 'about/labosquare',
    component: LabosquareComponent,
    data: {
      title: "LaboSquare | C Square Group"
    }
  },
  {
    path: 'about/testimonial',
    component: TestimonialsComponent,
    data: {
      title: "Testimonials | C Square Group"
    }
  },
  {
    path: 'career',
    component: CareerComponent,
    data: {
      title: "Careers | C Square Group"
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: "Contact | C Square Group"
    }
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
