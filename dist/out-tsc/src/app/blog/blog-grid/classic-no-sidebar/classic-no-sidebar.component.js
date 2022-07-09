import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/classic';
let ClassicNoSidebarComponent = class ClassicNoSidebarComponent {
    constructor() {
        this.blogData = blogClassicDB.classic;
    }
    ngOnInit() {
    }
};
ClassicNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-classic-no-sidebar',
        templateUrl: './classic-no-sidebar.component.html',
        styleUrls: ['./classic-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ClassicNoSidebarComponent);
export { ClassicNoSidebarComponent };
//# sourceMappingURL=classic-no-sidebar.component.js.map