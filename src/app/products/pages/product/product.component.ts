import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'products-product-page',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

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

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }
    
    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }

    increasePrice() {
        this.currentPrice++;
    }
}