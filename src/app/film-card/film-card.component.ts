import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filmsDb } from '../filmsDb';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  /* variables */
  @Input() searchValue: string;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  filmsData: filmsDb[];
  ratingClicked: number;
  itemIdRatingClicked: string;
  inputName: string;

  constructor(private httpClient: HttpClient){}
  /* methods */
  ngOnInit(){
    this.httpClient.get("/assets/films.json").subscribe((data : filmsDb[])=> this.filmsData = data)
  }

  ratingComponentClick(clickObj: any): void {
    const item = this.filmsData.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.Ratings = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.Title;
    }
}
}

