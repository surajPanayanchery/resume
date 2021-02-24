import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { DataTransferEnum } from '../enums';

@Directive({
  selector: '[droppable]',
})
export class DroppableDirective implements OnInit, OnDestroy {
  dragStart$: Subject<boolean> = new Subject();
  element: HTMLDivElement;
  @Output() dropped: EventEmitter<any> = new EventEmitter();
  subscription: Subscription = new Subscription();
  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement as HTMLDivElement;
  }

  ngOnInit() {
    this.element.addEventListener('dragover', (event) => {
      this.element.style.backgroundColor = '#e8debb';
      event.preventDefault();
    });
    this.listenDragEnter();
    this.listenDragLeave();
    this.listenDrop();
  }

  listenDragEnter() {
    const dragEnter$ = fromEvent(this.element, 'dragenter');
    this.subscription.add(
      dragEnter$
        .pipe(
          tap(() => {
            this.element.style.backgroundColor = '#e8debb';
            this.dragStart$.next(true);
          })
        )
        .subscribe()
    );
  }

  listenDrop() {
    const drop$ = fromEvent(this.element, 'drop');
    this.dragStart$
      .pipe(
        switchMap(() => {
          return drop$.pipe(
            tap((event) => {
              this.element.style.backgroundColor = 'inherit';
              const value = (event as DragEvent).dataTransfer.getData(
                DataTransferEnum.TEXT
              );
              if (value) {
                this.dropped.emit(value);
              }
            })
          );
        })
      )

      .subscribe();
  }

  listenDragLeave() {
    const dragLeave$ = fromEvent(this.element, 'dragleave');
    this.subscription.add(
      dragLeave$
        .pipe(
          tap(() => {
            this.element.style.backgroundColor = 'inherit';
          })
        )

        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
