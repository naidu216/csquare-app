import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.aboutTestimonial = [
            {
                img: "assets/images/event/testimonial/L3-1.png"
            },
            {
                img: "assets/images/event/testimonial/L3-1.png"
            }
        ];
        this.aboutTestimonialCarouselOptions = {
            items: 1,
            margin: 0,
            autoHeight: true,
            nav: true,
            dots: false,
            navText: ['<img src="assets/images/music/gallery/gallery-icon/left.png">', '<img src="assets/images/music/gallery/gallery-icon/right.png">'],
            autoplay: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            loop: true
        };
    }
    ngOnInit() {
    }
};
AboutUsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-about-us',
        templateUrl: './about-us.component.html',
        styleUrls: ['./about-us.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AboutUsComponent);
export { AboutUsComponent };
//# sourceMappingURL=about-us.component.js.map