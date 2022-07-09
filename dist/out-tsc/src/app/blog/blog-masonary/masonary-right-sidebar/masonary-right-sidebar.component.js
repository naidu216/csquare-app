import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/masonary';
let MasonaryRightSidebarComponent = class MasonaryRightSidebarComponent {
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
MasonaryRightSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-masonary-right-sidebar',
        templateUrl: './masonary-right-sidebar.component.html',
        styleUrls: ['./masonary-right-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MasonaryRightSidebarComponent);
export { MasonaryRightSidebarComponent };
//# sourceMappingURL=masonary-right-sidebar.component.js.map