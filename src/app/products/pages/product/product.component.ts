import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'products-product-page',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

    public isProductVisible: boolean = false;
    public currentPrice: number = 10;

    // Se llama antes de cualquier ciclo de vida: Inicializaciones e inyección de dependencias
    constructor() {
        console.log('Constructor');
    }

    /*
    Es utilizado principalmente para inicializar la data en el componente.
    Peticiones HTTP, llamar los subscribe(), escuchar WebSockets o implementación de Timers.
    */
    ngOnInit(): void {
        console.log('ngOnInit');
    }

    /*
    Se necesita si hemos de estar pendientes de los cambios de las propiedades de los @Inputs.
    Se activa primero cuando se cambia el valor de una propiedad vinculada.
    */
    ngOnChanges(changes: SimpleChanges): void {
        console.log({ changes });
        console.log('ngOnChanges');
    }
    
    /*
    Se activa cada vez que se verifican las propiedades de entrada de un componente o una directiva.
    Se usa cuando suceden cambios ya sea en @Inputs o en propiedades.
    */
    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    /*
    Se ejecuta después del ngOnInit (cuando el componente es inicializado) y del ngDoCheck.
    Angular realiza cualquier muestra de contenido dentro de las vistas de componentes.
    Está vinculado con las inicializaciones del componente hijo.
    */
    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }
    
    /*
    Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de
    detección de cambios de Angular.
    Está vinculado con las inicializaciones del componente hijo.
    */
    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }

    /*
    Se ejecuta cuando la vista del componente se ha inicializado por completo.
    Se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias.
    Solo se aplica a los componentes.
    */
    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }
    
    /*
    Se ejecuta cada vez que la vista del componente verifique cambios y cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.
    */
    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    /*
    Sirve para la limpieza de listeners o observables.
    Se llama justo antes de que el componente va a ser destruido.
    */
    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    increasePrice() {
        this.currentPrice++;
    }
}