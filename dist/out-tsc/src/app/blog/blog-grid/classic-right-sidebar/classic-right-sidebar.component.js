import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/classic';
let ClassicRightSidebarComponent = class ClassicRightSidebarComponent {
    constructor() {
        this.blogData = blogClassicDB.classic;
    }
    ngOnInit() {
    }
};
ClassicRightSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-classic-right-sidebar',
        templateUrl: './classic-right-sidebar.component.html',
        styleUrls: ['./classic-right-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ClassicRightSidebarComponent);
export { ClassicRightSidebarComponent };
//# sourceMappingURL=classic-right-sidebar.component.js.map