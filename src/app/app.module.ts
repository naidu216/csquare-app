import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { routes } from './app-routing.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';

import 'hammerjs';
import 'mousetrap';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from './shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ModernTeamMemberComponent} from './team/modern-team-member.component';
import { TitleProjComponent } from './projects/title-proj/title-proj.component';
import { TitleServComponent } from './services/title-serv/title-serv.component';
import { ServDetailComponent } from './services/serv-detail/serv-detail.component';
import { AboutComponent } from './about/about.component';
import { AboutDetailComponent } from './about/about-detail/about-detail.component';
import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamMemberComponent } from './team/team-member/team-member.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { CareerComponent } from './career/career.component';
import { VacancyListComponent } from './career/vacancy-list/vacancy-list.component';
import { DropResumeComponent } from './career/drop-resume/drop-resume.component';
import { CareerDetailComponent } from './career/career-detail/career-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectTabComponent } from './projects/project-tab/project-tab.component';
import { ProjectBoxComponent } from './projects/project-box/project-box.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectDetailsComponent } from './projects/project-detail/project-details/project-details.component';
import { ProjectSidebarComponent } from './projects/project-detail/project-sidebar/project-sidebar.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { CategoriesComponent } from './projects/categories/categories.component';
import { ServListComponent } from './services/serv-list/serv-list.component';
import { CommunityComponent } from './about/community/community.component';
import { PhilosophyComponent } from './about/philosophy/philosophy.component';
import { TestimonialsComponent } from './about/testimonials/testimonials.component';
import { LabosquareComponent } from './about/labosquare/labosquare.component';
import { EstimateComponent } from './estimate/estimate.component';
import { FeaturesComponent } from './about/features/features.component';
import { CoreprinciplesComponent } from './about/coreprinciples/coreprinciples.component';
import { OurclientsComponent } from './about/ourclients/ourclients.component';
import { TeamBoxComponent } from './team/team-box/team-box.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProjectsComponent,
    ServicesComponent,
    ModernTeamMemberComponent,
    
    TitleProjComponent, TitleServComponent, ServDetailComponent, AboutComponent, AboutDetailComponent, TeamListComponent, TeamMemberComponent, TeamDetailComponent, CareerComponent, VacancyListComponent, DropResumeComponent, CareerDetailComponent, ContactComponent, ProjectTabComponent, ProjectBoxComponent, ProjectDetailComponent, ProjectDetailsComponent, ProjectSidebarComponent, NewProjectComponent, CategoriesComponent, ServListComponent, CommunityComponent, PhilosophyComponent, TestimonialsComponent, LabosquareComponent, EstimateComponent, FeaturesComponent, CoreprinciplesComponent, OurclientsComponent, TeamBoxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    SwiperModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule

  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
