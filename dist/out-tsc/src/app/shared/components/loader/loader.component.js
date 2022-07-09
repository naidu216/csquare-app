import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoaderComponent = class LoaderComponent {
    constructor() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 1500);
    }
    ngOnInit() { }
    ngOnDestroy() { }
};
LoaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loader',
        templateUrl: './loader.component.html',
        styleUrls: ['./loader.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LoaderComponent);
export { LoaderComponent };
//# sourceMappingURL=loader.component.js.map