import { Component, OnInit } from "@angular/core";

import { Product } from "./product.model";
import { PromoCode } from './promo-code.model';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title: string = "Shopping Cart";
  numberItems: number;
  subTotal: number;
  discountPercent: number;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number;

  products: Product[] = [
    {
      id: 1,
      name: "CAFE G7 20 GOI",
      description: "Description for product item number 1",
      thumbnail: "https://via.placeholder.com/200x150",
      price: 5.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "HAT NEM KNOR 900GR",
      description: "Description for product item number 2",
      thumbnail: "https://via.placeholder.com/200x150",
      price: 9.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "CAFE G7 20 GOI 50",
      description: "Description for product item number 1",
      thumbnail: "https://via.placeholder.com/200x150",
      price: 5.99,
      quantity: 2,
    },
  ];

  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
];

  ngOnInit() {
    this.updateCartSummary();
  }

  removeProduct(productId) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    this.products.splice(index, 1);

    let numberItems = 0;
    let subTotal = 0;

    this.updateCartSummary();
  }

  updateCartSummary() {
    let numberItems = 0;
    let subTotal = 0;

    for (const product of this.products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }

    this.numberItems = numberItems;
    this.subTotal = subTotal;
    this.tax = (subTotal * this.taxPercent) / 100;
  }

  updateQuantity(prd: { productId: number; quantity: number }) {
    const product = this.products.find((p) => p.id === prd.productId);

    if (product) {
      product.quantity = prd.quantity || 0;
    }

    this.updateCartSummary();
  }

  applyPromoCode(code: string){
      const promoCode = this.promoCodes.find((p) => p.code === code);

      if(!promoCode){
        alert("nhap code khacs")
      }else{
        this.discountPercent = promoCode.discountPercent;
        this.discount = (this.subTotal*this.discountPercent)/100;
      }

      this.updateCartSummary();
  }


}
