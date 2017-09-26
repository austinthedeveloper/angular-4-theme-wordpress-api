import {
  Directive,
  OnChanges,
  ElementRef,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[CountTo]'
})
export class CountToDirective implements OnChanges {
  @Input()
  'CountTo': number;
  @Input()
  'from' = 0;
  @Input()
  'duration' = 4;

  e = this.el.nativeElement;
  num;
  refreshInterval = 30;
  steps;
  step = 0;
  increment;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.CountTo) {
      this.start();
    }
  }

  calculate() {
    this.duration = this.duration * 1000;

    this.steps = Math.ceil(this.duration / this.refreshInterval);
    this.increment = ((this.CountTo - this.from) / this.steps);
    this.num = this.from;
  }

  tick() {
    setTimeout(() => {
      this.num += this.increment;
      this.step++;
      if (this.step >= this.steps) {
        this.num = this.CountTo;
        this.e.textContent = this.CountTo;
      } else {
        this.e.textContent = Math.round(this.num);
        this.tick();
      }
    }, this.refreshInterval);
  }

  start() {
    this.calculate();
    this.tick();
  }
}
