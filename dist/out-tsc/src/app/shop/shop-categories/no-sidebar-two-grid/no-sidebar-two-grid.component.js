import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
let NoSidebarTwoGridComponent = class NoSidebarTwoGridComponent {
    constructor(route, router, productsService) {
        this.route = route;
        this.router = router;
        this.productsService = productsService;
        this.products = [];
        this.sortByOrder = ''; // sorting
        this.lastKey = ''; // key to offset next query from
        this.finished = false; // boolean when end of data is reached
        this.listView = false;
        //Grid 4
        this.col_xl_3 = false;
        //Grid 3
        this.col_xl_4 = false;
        //Grid 2
        this.col_md_6 = true;
        //List View
        this.col_xl_12 = false;
        this.gridOptions = true;
        this.active = false;
        this.route.params.subscribe(params => {
            const category = params['category'];
            this.productsService.getProductByCategory(category).subscribe(products => {
                this.products = products.slice(0, 8);
            });
        });
    }
    ngOnInit() { }
    listOpen() {
        this.gridOptions = false;
        this.listView = true;
        this.col_xl_12 = true;
    }
    grid2() {
        this.gridOptions = true;
        this.col_md_6 = true;
        this.col_xl_3 = false;
        this.listView = false;
        this.col_xl_4 = false;
        this.col_xl_12 = false;
    }
    grid3() {
        this.gridOptions = true;
        this.listView = false;
        this.col_xl_4 = true;
        this.col_xl_3 = false;
        this.col_md_6 = true;
        this.col_xl_12 = false;
    }
    grid4() {
        this.gridOptions = true;
        this.listView = false;
        this.col_xl_3 = true;
        this.col_md_6 = true;
        this.col_xl_4 = false;
        this.col_xl_12 = false;
    }
    // sorting type ASC / DESC / A-Z / Z-A etc.
    onChangeSorting(val) {
        this.sortByOrder = val;
    }
};
NoSidebarTwoGridComponent = tslib_1.__decorate([
    Component({
        selector: 'app-no-sidebar-two-grid',
        templateUrl: './no-sidebar-two-grid.component.html',
        styleUrls: ['./no-sidebar-two-grid.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        ProductsService])
], NoSidebarTwoGridComponent);
export { NoSidebarTwoGridComponent };
//# sourceMappingURL=no-sidebar-two-grid.component.js.map