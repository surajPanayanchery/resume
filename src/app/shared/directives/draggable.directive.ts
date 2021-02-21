import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataTransferEnum } from '../enums';

@Directive({
  selector: '[draggable]',
})
export class DraggableDirective implements OnInit, OnDestroy {
  @Input() dragItem: any;
  element: HTMLDivElement;  
  subscription: Subscription = new Subscription();

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement as HTMLDivElement;
  }

  ngOnInit() {
    this.element.draggable = true;
    this.element.style.cursor = 'grab';
    const dragStart$ = fromEvent(this.element, 'dragstart').pipe(
      tap((event) => {        
        (event as DragEvent).dataTransfer.setData(
          DataTransferEnum.TEXT,
          this.dragItem
        );
      })
    );
    this.subscription.add(dragStart$.subscribe());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
