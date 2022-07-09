import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
import { WishListService } from '../../../shared/service/e-commerce/wish-list.service';
import { CartService } from '../../../shared/service/e-commerce/cart.service';
import { of } from 'rxjs';
let WishlistComponent = class WishlistComponent {
    constructor(router, wishlistService, productsService, cartService) {
        this.router = router;
        this.wishlistService = wishlistService;
        this.productsService = productsService;
        this.cartService = cartService;
        this.product = of([]);
        this.wishlistItems = [];
        this.product = this.wishlistService.getProducts();
        this.product.subscribe(products => this.wishlistItems = products);
    }
    ngOnInit() { }
    // Add to cart
    addToCart(product, quantity = 1) {
        if (quantity > 0)
            this.cartService.addToCart(product, quantity);
        this.wishlistService.removeFromWishlist(product);
    }
    // Remove from wishlist
    removeItem(product) {
        this.wishlistService.removeFromWishlist(product);
    }
};
WishlistComponent = tslib_1.__decorate([
    Component({
        selector: 'app-wishlist',
        templateUrl: './wishlist.component.html',
        styleUrls: ['./wishlist.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router, WishListService,
        ProductsService, CartService])
], WishlistComponent);
export { WishlistComponent };
//# sourceMappingURL=wishlist.component.js.map