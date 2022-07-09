import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/split';
let BigpostSplitNoSidebarComponent = class BigpostSplitNoSidebarComponent {
    constructor() {
        this.blogData = blogClassicDB.split;
    }
    ngOnInit() {
    }
};
BigpostSplitNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bigpost-split-no-sidebar',
        templateUrl: './bigpost-split-no-sidebar.component.html',
        styleUrls: ['./bigpost-split-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BigpostSplitNoSidebarComponent);
export { BigpostSplitNoSidebarComponent };
//# sourceMappingURL=bigpost-split-no-sidebar.component.js.map