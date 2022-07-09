import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
let ProductLeftSidebarComponent = class ProductLeftSidebarComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
    }
    //Close sidebar on click on outside the sidebar
    closeOverlay() {
        this.productService.filterBar = false;
    }
};
ProductLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-left-sidebar',
        templateUrl: './product-left-sidebar.component.html',
        styleUrls: ['./product-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ProductsService])
], ProductLeftSidebarComponent);
export { ProductLeftSidebarComponent };
//# sourceMappingURL=product-left-sidebar.component.js.map