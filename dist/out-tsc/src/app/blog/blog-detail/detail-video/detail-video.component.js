import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail';
let DetailVideoComponent = class DetailVideoComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.blogData = blogDetailDB.Details;
    }
    ngOnInit() {
    }
    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    }
};
DetailVideoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail-video',
        templateUrl: './detail-video.component.html',
        styleUrls: ['./detail-video.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [NgbModal])
], DetailVideoComponent);
export { DetailVideoComponent };
//# sourceMappingURL=detail-video.component.js.map