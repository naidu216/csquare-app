import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
let TapToTopComponent = class TapToTopComponent {
    constructor() {
        this.showScrollHeight = 500;
        this.hideScrollHeight = 10;
    }
    ngOnInit() {
    }
    onActivate() {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 200); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
    onWindowScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }
};
tslib_1.__decorate([
    HostListener('window:scroll', []),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TapToTopComponent.prototype, "onWindowScroll", null);
TapToTopComponent = tslib_1.__decorate([
    Component({
        selector: 'app-tap-to-top',
        templateUrl: './tap-to-top.component.html',
        styleUrls: ['./tap-to-top.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TapToTopComponent);
export { TapToTopComponent };
//# sourceMappingURL=tap-to-top.component.js.map