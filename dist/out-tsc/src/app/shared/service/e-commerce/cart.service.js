import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
let products = JSON.parse(localStorage.getItem("cartItem")) || [];
let CartService = class CartService {
    constructor(route, productService, toastr) {
        this.route = route;
        this.productService = productService;
        this.toastr = toastr;
        this.cartItems = new BehaviorSubject([]);
        this.itemsInCart = [];
        this.cartItems.subscribe(products => products = products);
        this.itemList = [];
    }
    // Get Products
    getItems() {
        const itemsStream = new Observable(observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream;
    }
    addToCart(product, quantity) {
        var item = false;
        let hashItem = products.find((items, index) => {
            if (items.product.id == product.id) {
                let qty = products[index].quantity + quantity;
                let stock = this.calculateStockCounts(products[index], quantity);
                if (qty != 0 && stock) {
                    products[index]['quantity'] = qty;
                    this.toastr.success('This product has been already added to cart.');
                    localStorage.setItem('cartItem', JSON.stringify(products));
                }
                return true;
            }
        });
        if (!hashItem) {
            item = { product: product, quantity: quantity };
            products.push(item);
            this.toastr.success('This product has been added to cart.');
        }
        localStorage.setItem('cartItem', JSON.stringify(products));
        return item;
    }
    calculateStockCounts(product, quantity) {
        let qty = product.quantity + quantity;
        let stock = product.product.stock;
        if (stock < qty) {
            this.toastr.error('You can not add more items than available. In stock ' + stock + ' items.');
            return false;
        }
        return true;
    }
    // Removed in cart
    removeFromCart(item) {
        if (item === undefined)
            return false;
        const index = products.indexOf(item);
        products.splice(index, 1);
        localStorage.setItem("cartItem", JSON.stringify(products));
    }
    updateCartQuantity(product, quantity) {
        return products.find((items, index) => {
            if (items.product.id == product.id) {
                let qty = products[index].quantity + quantity;
                let stock = this.calculateStockCounts(products[index], quantity);
                if (qty != 0 && stock)
                    products[index]['quantity'] = qty;
                localStorage.setItem("cartItem", JSON.stringify(products));
                return true;
            }
        });
    }
    getTotalAmount() {
        return this.cartItems.map((product) => {
            return products.reduce((prev, curr) => {
                return prev + curr.product.price * curr.quantity;
            }, 0);
        });
    }
};
CartService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ProductsService, ToastrService])
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map