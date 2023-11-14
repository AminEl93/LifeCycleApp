import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'products-product-page',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit, OnChanges, DoCheck {

    public isProductVisible: boolean = false;
    public currentPrice: number = 10;

    constructor() {
        console.log('Constructor');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log({ changes });
        console.log('ngOnChanges');
    }
    
    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    increasePrice() {
        this.currentPrice++;
    }
}