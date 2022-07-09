import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/masonary';
let MasonaryNoSidebarComponent = class MasonaryNoSidebarComponent {
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
MasonaryNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-masonary-no-sidebar',
        templateUrl: './masonary-no-sidebar.component.html',
        styleUrls: ['./masonary-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MasonaryNoSidebarComponent);
export { MasonaryNoSidebarComponent };
//# sourceMappingURL=masonary-no-sidebar.component.js.map