import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-cart-header",
  templateUrl: "./cart-header.component.html",
  styleUrls: ["./cart-header.component.css"],
})
export class CartHeaderComponent implements OnInit {
  @Input() numberItems: number;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
