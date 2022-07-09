import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("wishlistItem")) || [];
let WishListService = class WishListService {
    // Initialize 
    constructor(toastrService) {
        this.toastrService = toastrService;
        // wishlist array
        this.wishlistProducts = new BehaviorSubject([]);
        this.wishlistProducts.subscribe(products => products = products);
    }
    // Get  wishlist Products
    getProducts() {
        const itemsStream = new Observable(observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream;
    }
    // If item is aleready added In wishlist
    hasProduct(product) {
        const item = products.find(item => item.id === product.id);
        return item !== undefined;
    }
    // Add to wishlist
    addToWishlist(product) {
        var item = false;
        if (this.hasProduct(product)) {
            item = products.filter(item => item.id === product.id)[0];
            const index = products.indexOf(item);
        }
        else {
            products.push(product);
        }
        this.toastrService.success('This product added to Wishlist.'); // toasr services
        localStorage.setItem("wishlistItem", JSON.stringify(products));
        return item;
    }
    // Removed Product
    removeFromWishlist(product) {
        if (product === undefined) {
            return;
        }
        const index = products.indexOf(product);
        products.splice(index, 1);
        localStorage.setItem("wishlistItem", JSON.stringify(products));
    }
};
WishListService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ToastrService])
], WishListService);
export { WishListService };
//# sourceMappingURL=wish-list.service.js.map