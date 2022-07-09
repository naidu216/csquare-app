import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
let FooterComponent = class FooterComponent {
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
FooterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map