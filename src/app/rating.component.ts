import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();
  @Input() public rate: number = 0;

  public rates: number[] = [1, 2, 3, 4, 5];
  public previousRate: number;

  constructor() { }

  ngOnInit() {
  }

  public setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  public setTemporaryRate(r: number){
    if(this.previousRate !== undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  public clearTemporaryRate() {
    if(this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
