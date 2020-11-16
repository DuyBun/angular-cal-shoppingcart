import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {

  promoCode : string;

  @Output() onApplyPromoCode = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  applyCodePromo(){
    const code = this.promoCode;
    if(code && code.trim() !== ''){
      this.onApplyPromoCode.emit(code);
    }
  }

}
