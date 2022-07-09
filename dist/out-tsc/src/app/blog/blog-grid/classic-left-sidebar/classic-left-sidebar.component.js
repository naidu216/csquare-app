import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/classic';
let ClassicLeftSidebarComponent = class ClassicLeftSidebarComponent {
    constructor() {
        this.blogData = blogClassicDB.classic;
    }
    ngOnInit() {
    }
};
ClassicLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-classic-left-sidebar',
        templateUrl: './classic-left-sidebar.component.html',
        styleUrls: ['./classic-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ClassicLeftSidebarComponent);
export { ClassicLeftSidebarComponent };
//# sourceMappingURL=classic-left-sidebar.component.js.map