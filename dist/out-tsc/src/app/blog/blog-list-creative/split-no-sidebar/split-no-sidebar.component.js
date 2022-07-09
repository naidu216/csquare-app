import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split';
let SplitNoSidebarComponent = class SplitNoSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.split;
    }
    ngOnInit() {
    }
};
SplitNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-split-no-sidebar',
        templateUrl: './split-no-sidebar.component.html',
        styleUrls: ['./split-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SplitNoSidebarComponent);
export { SplitNoSidebarComponent };
//# sourceMappingURL=split-no-sidebar.component.js.map