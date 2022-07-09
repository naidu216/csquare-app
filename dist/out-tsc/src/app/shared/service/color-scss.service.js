import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ColorScssService = class ColorScssService {
    constructor() {
        // For enabling Portfolio basic with title
        this.displyBlock = false;
    }
    // Set Color 
    setColorScheme(color) {
        var href = "/assets/css/" + color + ".css";
        document.getElementById("color").innerHTML = '<link href=' + href + ' rel="stylesheet">';
    }
    setFontScheme() {
        document.getElementById("font").innerHTML = '<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">';
    }
};
ColorScssService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ColorScssService);
export { ColorScssService };
//# sourceMappingURL=color-scss.service.js.map