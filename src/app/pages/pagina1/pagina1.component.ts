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
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  nombre: string = 'Kouru23';
  lastName:string ='Misazawa';
  seconds: number = 0;
  timerSubscribtion!: Subscription;

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
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
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscribtion.unsubscribe();
    console.log('timer limpiado');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscribtion = interval( 1000 ).subscribe( i => {
      this.seconds = i;
    })

  }

  guardar(){

  }
}
