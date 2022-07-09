import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail';
let DetailComponent = class DetailComponent {
    constructor() {
        this.blogData = blogDetailDB.Details;
    }
    ngOnInit() {
    }
};
DetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map