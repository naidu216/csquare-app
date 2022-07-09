import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
let ProductRightSidebarComponent = class ProductRightSidebarComponent {
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
ProductRightSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-right-sidebar',
        templateUrl: './product-right-sidebar.component.html',
        styleUrls: ['./product-right-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ProductsService])
], ProductRightSidebarComponent);
export { ProductRightSidebarComponent };
//# sourceMappingURL=product-right-sidebar.component.js.map