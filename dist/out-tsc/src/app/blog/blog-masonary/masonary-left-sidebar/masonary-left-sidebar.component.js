import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/masonary';
let MasonaryLeftSidebarComponent = class MasonaryLeftSidebarComponent {
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
MasonaryLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-masonary-left-sidebar',
        templateUrl: './masonary-left-sidebar.component.html',
        styleUrls: ['./masonary-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MasonaryLeftSidebarComponent);
export { MasonaryLeftSidebarComponent };
//# sourceMappingURL=masonary-left-sidebar.component.js.map