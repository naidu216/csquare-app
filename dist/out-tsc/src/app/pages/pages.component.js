import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service';
let PagesComponent = class PagesComponent {
    constructor(colorPicker) {
        this.colorPicker = colorPicker;
    }
    ngOnInit() {
        this.colorPicker.setColorScheme('inner-page');
    }
};
PagesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pages',
        templateUrl: './pages.component.html',
        styleUrls: ['./pages.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ColorScssService])
], PagesComponent);
export { PagesComponent };
//# sourceMappingURL=pages.component.js.map