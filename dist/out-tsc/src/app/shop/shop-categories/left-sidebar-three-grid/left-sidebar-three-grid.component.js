import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
let LeftSidebarThreeGridComponent = class LeftSidebarThreeGridComponent {
    constructor(route, router, productsService) {
        this.route = route;
        this.router = router;
        this.productsService = productsService;
        this.products = [];
        this.items = [];
        this.allItems = [];
        this.colorFilters = [];
        this.tagsFilters = [];
        this.tags = [];
        this.colors = [];
        this.sortByOrder = ''; // sorting
        this.lastKey = ''; // key to offset next query from
        this.finished = false; // boolean when end of data is reached
        this.sidebaron = false;
        this.show = false;
        this.open = false;
        this.listView = false;
        //Grid 4
        this.col_xl_3 = false;
        //Grid 3
        this.col_xl_4 = true;
        //Grid 2
        this.col_md_6 = true;
        //List View
        this.col_xl_12 = false;
        this.gridOptions = true;
        this.active = false;
        this.route.params.subscribe(params => {
            const category = params['category'];
            this.productsService.getProductByCategory(category).subscribe(products => {
                this.allItems = products; // all products
                this.products = products.slice(0, 8);
                this.getTags(products);
                this.getColors(products);
            });
        });
    }
    ngOnInit() { }
    // Get current product tags
    getTags(products) {
        var uniqueBrands = [];
        var itemBrand = Array();
        products.map((product, index) => {
            if (product.tags) {
                product.tags.map((tag) => {
                    const index = uniqueBrands.indexOf(tag);
                    if (index === -1)
                        uniqueBrands.push(tag);
                });
            }
        });
        for (var i = 0; i < uniqueBrands.length; i++) {
            itemBrand.push({ brand: uniqueBrands[i] });
        }
        this.tags = itemBrand;
    }
    // Get current product colors
    getColors(products) {
        var uniqueColors = [];
        var itemColor = Array();
        products.map((product, index) => {
            if (product.colors) {
                product.colors.map((color) => {
                    const index = uniqueColors.indexOf(color);
                    if (index === -1)
                        uniqueColors.push(color);
                });
            }
        });
        for (var i = 0; i < uniqueColors.length; i++) {
            itemColor.push({ color: uniqueColors[i] });
        }
        this.colors = itemColor;
    }
    // Update price filter
    updatePriceFilters(price) {
        let pricemin = price[0];
        let maxPrice = price[1];
        let items = [];
        this.products.filter((item) => {
            if (item.price >= pricemin && item.price <= maxPrice) {
                items.push(item); // push in array
            }
        });
        this.items = items;
    }
    // Initialize filetr Items
    filterItems() {
        return this.items.filter((item) => {
            const Colors = this.colorFilters.reduce((prev, curr) => {
                if (item.colors) {
                    if (item.colors.includes(curr.color)) {
                        return prev && true;
                    }
                }
            }, true);
            const Tags = this.tagsFilters.reduce((prev, curr) => {
                if (item.tags) {
                    if (item.tags.includes(curr)) {
                        return prev && true;
                    }
                }
            }, true);
            return Colors && Tags; // return true
        });
    }
    // Update tags filter
    updateTagFilters(tags) {
        this.tagsFilters = tags;
    }
    // Update color filter
    updateColorFilters(colors) {
        this.colorFilters = colors;
    }
    // sorting type ASC / DESC / A-Z / Z-A etc.
    onChangeSorting(val) {
        this.sortByOrder = val;
    }
    openFilter() {
        if (this.show == true && this.sidebaron == true) {
            this.show = false;
            this.sidebaron = false;
        }
        else {
            this.show = true;
            this.sidebaron = true;
        }
    }
    openMediaFilter() {
        if (this.show == false && this.sidebaron == false && this.open == false) {
            this.show = true;
            this.sidebaron = true;
            this.open = true;
        }
        else {
            this.show = false;
            this.sidebaron = false;
            this.open = false;
        }
    }
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
    toggleFilter() {
        this.productsService.filterBar = !this.productsService.filterBar;
    }
    //Close sidebar on click on outside the sidebar
    closeOverlay() {
        this.productsService.filterBar = false;
    }
};
LeftSidebarThreeGridComponent = tslib_1.__decorate([
    Component({
        selector: 'app-left-sidebar-three-grid',
        templateUrl: './left-sidebar-three-grid.component.html',
        styleUrls: ['./left-sidebar-three-grid.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        ProductsService])
], LeftSidebarThreeGridComponent);
export { LeftSidebarThreeGridComponent };
//# sourceMappingURL=left-sidebar-three-grid.component.js.map