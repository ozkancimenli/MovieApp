import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "movie 1", description: "güzel film", imageUrl: "1.jpeg" },
      { id: 2, name: "movie 2", description: "güzel film", imageUrl: "2.jpeg" },
      { id: 3, name: "movie 3", description: "güzel film", imageUrl: "3.jpeg" },
      { id: 4, name: "movie 4", description: "güzel film", imageUrl: "4.jpeg" },
      { id: 5, name: "movie 5", description: "güzel film", imageUrl: "5.jpeg" }
    ];
    return { movies };
  }
  constructor() { }
}
