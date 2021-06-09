import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  /* variables */
  @Input() rating: any;
  @Input() totRating: number[];
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;

  constructor() { }

  /* methods */
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
    this.rating = localStorage.getItem('dataSource');
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating,
      totRating: localStorage.setItem('dataSource', JSON.stringify(this.rating))
    });
    console.log(localStorage.getItem('dataSource'));
  }

}
