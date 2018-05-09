
import { Directive, HostListener, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollable]'
})
export class EndDirective {

  @Output() scrollPosition = new EventEmitter()
  @HostListener('scroll', ['$event'])
  onScroll(event) {
      if ((event.target.scrollTop/(event.target.scrollHeight - event.target.clientHeight)) > 0.85) {
        this.scrollPosition.emit('bottom')
      }
  }
}