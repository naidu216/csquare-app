import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/fullwidth-3';
let FullwidthThreeColumnComponent = class FullwidthThreeColumnComponent {
    constructor() {
        this.myOptions = {
            transitionDuration: '0.8s',
            originTop: true
        };
        setTimeout(() => {
            this.blogData = blogMasonaryDB.masonary;
        });
    }
    ngOnInit() {
    }
};
FullwidthThreeColumnComponent = tslib_1.__decorate([
    Component({
        selector: 'app-fullwidth-three-column',
        templateUrl: './fullwidth-three-column.component.html',
        styleUrls: ['./fullwidth-three-column.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FullwidthThreeColumnComponent);
export { FullwidthThreeColumnComponent };
//# sourceMappingURL=fullwidth-three-column.component.js.map