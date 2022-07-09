import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
import { WishListService } from '../../../shared/service/e-commerce/wish-list.service';
import { CartService } from '../../../shared/service/e-commerce/cart.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
let ThreeGridComponent = class ThreeGridComponent {
    constructor(route, router, productsService, wishlistService, cartService, modalService) {
        this.route = route;
        this.router = router;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.cartService = cartService;
        this.modalService = modalService;
        this.product = {};
        this.products = [];
        this.counter = 1;
        this.selectedSize = '';
        this.wishlist = false;
        this.productSliderOptions = {
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            slideSpeed: 300,
            loop: true
        };
        this.productSliderOptions1 = {
            items: 3,
            loop: true,
            margin: 10
        };
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.productsService.getProduct(id).subscribe(product => this.product = product);
        });
    }
    ngOnInit() {
        this.productsService.getProducts().subscribe(product => this.products = product);
    }
    increment() {
        this.counter += 1;
    }
    decrement() {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    }
    // Change size variant
    changeSizeVariant(variant) {
        this.selectedSize = variant;
    }
    // Add to cart
    addToCart(product, quantity) {
        if (quantity == 0)
            return false;
        this.cartService.addToCart(product, parseInt(quantity));
    }
    // Add to cart
    buyNow(product, quantity) {
        if (quantity > 0)
            this.cartService.addToCart(product, parseInt(quantity));
        this.router.navigate(['/e-commerce/checkout']);
    }
    // Add to wishlist
    addToWishlist(product) {
        this.wishlist = true;
        this.wishlistService.addToWishlist(product);
    }
    open(content) {
        this.modalService.open(content, { centered: true, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
ThreeGridComponent = tslib_1.__decorate([
    Component({
        selector: 'app-three-grid',
        templateUrl: './three-grid.component.html',
        styleUrls: ['./three-grid.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router,
        ProductsService, WishListService,
        CartService, NgbModal])
], ThreeGridComponent);
export { ThreeGridComponent };
//# sourceMappingURL=three-grid.component.js.map