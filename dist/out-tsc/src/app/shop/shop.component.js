import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service';
let ShopComponent = class ShopComponent {
    constructor(colorPicker) {
        this.colorPicker = colorPicker;
    }
    ngOnInit() {
        this.colorPicker.setColorScheme('inner-page');
    }
};
ShopComponent = tslib_1.__decorate([
    Component({
        selector: 'app-shop',
        templateUrl: './shop.component.html',
        styleUrls: ['./shop.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ColorScssService])
], ShopComponent);
export { ShopComponent };
//# sourceMappingURL=shop.component.js.map