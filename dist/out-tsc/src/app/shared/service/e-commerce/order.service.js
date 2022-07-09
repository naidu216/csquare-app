import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
let OrderService = class OrderService {
    constructor(router) {
        this.router = router;
    }
    // Get order items
    getOrderItems() {
        return this.OrderDetails;
    }
    // Create order
    createOrder(product, details, orderId, amount) {
        var item = {
            shippingDetails: details,
            product: product,
            orderId: orderId,
            totalAmount: amount
        };
        this.OrderDetails = item;
        this.router.navigate(['/e-commerce/checkout/success']);
    }
};
OrderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map