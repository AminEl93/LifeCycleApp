import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'products-price',
    templateUrl: './price.component.html'
})

export class PriceComponent implements OnInit, OnChanges {
    
    @Input() public price:number = 0;

    ngOnInit(): void {
        console.log('Componente HIJO: ngOnInit');
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        console.log('Componente HIJO: ngOnChanges');
        console.log({ changes });
    }
}
