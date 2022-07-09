import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.router.events
            .pipe(filter((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
            return event instanceof NavigationEnd;
        }))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(event => {
            let title = event.snapshot.data['title'];
            let parent = event.parent.snapshot.data['breadcrumb'];
            let child = event.snapshot.data['breadcrumb'];
            this.breadcrumbs = {};
            this.title = title;
            this.breadcrumbs = {
                "parentBreadcrumb": parent,
                "childBreadcrumb": child
            };
        });
    }
    ngOnInit() {
    }
};
BreadcrumbComponent = tslib_1.__decorate([
    Component({
        selector: 'app-breadcrumb',
        templateUrl: './breadcrumb.component.html',
        styleUrls: ['./breadcrumb.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        Router])
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map