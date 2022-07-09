import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavService } from '../../../../shared/service/nav.service';
let CenterMenuComponent = class CenterMenuComponent {
    constructor(navServices) {
        this.navServices = navServices;
        this.openSide = false;
        this.activeItem = 'home';
        this.active = false;
        this.activeChildItem = '';
        this.overlay = false;
    }
    ngOnInit() {
        this.navServices.items.subscribe(menuItems => {
            this.menuItems = menuItems;
        });
    }
    toggleSidebar() {
        this.openSide = !this.openSide;
    }
    closeOverlay() {
        this.openSide = false;
    }
    //For Active Main menu in Mobile View
    setActive(menuItem) {
        if (this.activeItem === menuItem) {
            this.activeItem = '';
        }
        else {
            this.activeItem = menuItem;
        }
    }
    isActive(item) {
        return this.activeItem === item;
    }
    // For Active Child Menu in Mobile View
    setChildActive(subMenu) {
        if (this.activeChildItem === subMenu) {
            this.activeChildItem = '';
        }
        else {
            this.activeChildItem = subMenu;
        }
    }
    ischildActive(subMenu) {
        return this.activeChildItem === subMenu;
    }
};
CenterMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-center-menu',
        templateUrl: './center-menu.component.html',
        styleUrls: ['./center-menu.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [NavService])
], CenterMenuComponent);
export { CenterMenuComponent };
//# sourceMappingURL=center-menu.component.js.map