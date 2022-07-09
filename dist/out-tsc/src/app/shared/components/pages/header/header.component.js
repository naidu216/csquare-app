import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        });
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map