import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/split';
let BigpostSplitComponent = class BigpostSplitComponent {
    constructor() {
        this.blogData = blogClassicDB.split;
    }
    ngOnInit() {
    }
};
BigpostSplitComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bigpost-split',
        templateUrl: './bigpost-split.component.html',
        styleUrls: ['./bigpost-split.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BigpostSplitComponent);
export { BigpostSplitComponent };
//# sourceMappingURL=bigpost-split.component.js.map