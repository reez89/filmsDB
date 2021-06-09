import { Pipe, PipeTransform } from "@angular/core";
import { filmsDb } from './filmsDb';

@Pipe({
  name: 'searchfilter'
})

export class SearchFilterPipe implements PipeTransform{
  transform(films: filmsDb[], searchValue: string): filmsDb[]{
    if (!films || !searchValue){
      return films;
    }
    return films.filter(film=>{
      return film.Title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })
  }
}
