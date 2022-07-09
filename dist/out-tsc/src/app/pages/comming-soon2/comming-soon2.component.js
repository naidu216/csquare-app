import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CommingSoon2Component = class CommingSoon2Component {
    constructor() {
        this.setTime();
    }
    ngOnInit() {
    }
    setTime() {
        this.timer = setInterval(function () {
            var countDown = new Date('dec 30, 2019 00:00:00').getTime();
            var now = new Date().getTime();
            var distance = countDown - now;
            this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
        }, this.seconds);
    }
    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
};
CommingSoon2Component = tslib_1.__decorate([
    Component({
        selector: 'app-comming-soon2',
        templateUrl: './comming-soon2.component.html',
        styleUrls: ['./comming-soon2.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CommingSoon2Component);
export { CommingSoon2Component };
//# sourceMappingURL=comming-soon2.component.js.map