import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];
let ProductsService = class ProductsService {
    constructor(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.currency = 'USD';
        this.catalogMode = false;
        // For toggling filter of detail page in mobile view
        this.filterBar = false;
    }
    products() {
        return this.http.get('assets/data/ecommerce/products.json').map((res) => {
            return res;
        });
    }
    getProducts() {
        return this.products();
    }
    getProduct(id) {
        return this.products().pipe(map(items => {
            return items.find((item) => {
                return item.id === id;
            });
        }));
    }
    getProductByColor(color) {
        return this.products().pipe(map(items => items.filter((item) => {
            if (color == item.colors) {
                return item.colors;
            }
            else {
                return item;
            }
        })));
    }
    checkDuplicateInObject(tag, Products) {
        var seenDuplicate = false, testObject = {};
        Products.map(function (item) {
            var itemPropertyName = item[tag];
            if (itemPropertyName in testObject) {
                testObject[itemPropertyName].duplicate = true;
                item.duplicate = true;
                seenDuplicate = true;
            }
            else {
                testObject[itemPropertyName] = item;
                delete item.duplicate;
            }
        });
        return seenDuplicate;
    }
    getProductByCategory(category) {
        return this.products().pipe(map(items => items.filter((item) => {
            if (category == 'all') {
                return item;
            }
            else {
                return item.category === category;
            }
        })));
    }
    tag() {
        return this.http.get('assets/data/products.json').map((res) => {
            return res;
        });
    }
    getTags() {
        return this.products();
    }
    /*
       ---------------------------------------------
       ----------  Compare Product  ----------------
       ---------------------------------------------
    */
    // Get Compare Products
    getComapreProducts() {
        const itemsStream = new Observable(observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream;
    }
    // If item is aleready added In compare
    hasProduct(product) {
        const item = products.find(item => item.id === product.id);
        return item !== undefined;
    }
    // Add to compare
    addToCompare(product) {
        var item = false;
        if (this.hasProduct(product)) {
            item = products.filter(item => item.id === product.id)[0];
            const index = products.indexOf(item);
        }
        else {
            if (products.length < 4)
                products.push(product);
            else
                this.toastrService.warning('Maximum 4 products are in compare.'); // toasr services
        }
        localStorage.setItem("compareItem", JSON.stringify(products));
        return item;
    }
    // Removed Product
    removeFromCompare(product) {
        if (product === undefined) {
            return;
        }
        const index = products.indexOf(product);
        products.splice(index, 1);
        localStorage.setItem("compareItem", JSON.stringify(products));
    }
};
ProductsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, ToastrService])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map