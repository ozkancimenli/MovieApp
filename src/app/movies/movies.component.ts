import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";

@Component({
    selector: 'movies'  ,
    templateUrl:'movies.component.html',
    styleUrls:['movies.component.css']
})
export class MoviesComponent {
title= 'Movie List';

movies= Movies;

}