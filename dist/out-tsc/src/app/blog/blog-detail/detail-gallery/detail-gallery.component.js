import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail';
let DetailGalleryComponent = class DetailGalleryComponent {
    constructor() {
        this.blogData = blogDetailDB.Details;
        this.images = [
            {
                img: 'assets/images/agency/blog/12.jpg'
            },
            {
                img: 'assets/images/agency/blog/10.jpg'
            }
        ];
        this.imageGalleryOptions = {
            items: 1,
            nav: true,
            dots: false,
            navText: ['<img src="assets/images/agency/testimonial/left.png">', '<img src="assets/images/agency/testimonial/right.png">'],
            autoplay: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            loop: true,
        };
    }
    ngOnInit() {
    }
};
DetailGalleryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail-gallery',
        templateUrl: './detail-gallery.component.html',
        styleUrls: ['./detail-gallery.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DetailGalleryComponent);
export { DetailGalleryComponent };
//# sourceMappingURL=detail-gallery.component.js.map