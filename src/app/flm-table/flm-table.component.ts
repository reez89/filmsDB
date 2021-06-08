import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { filmsDb } from '../filmsDb';


@Component({
  selector: 'app-flm-table',
  templateUrl: './flm-table.component.html',
  styleUrls: ['./flm-table.component.scss']
})

export class FlmTableComponent implements OnInit {
  /* variables */
  @Input() searchValue: string;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns: string[] = ['Title', 'description', 'language','rate'];
  filmsData: filmsDb[];
  ratingClicked: number;
  itemIdRatingClicked: string;

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

