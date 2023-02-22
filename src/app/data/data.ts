import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IBook } from '../books/models/book';
import { v4 as uuid } from 'uuid';

export class Data implements InMemoryDbService {
  createDb(): Record<string, IBook[]> {
    const books: IBook[] = [
      {
        id: uuid(),
        title: 'ng-book',
        author: 'fullstack',
        publisher: 'fullstack aussi',
      },
      {
        id: uuid(),
        title: 'ng-book 2',
        author: 'fullstack 2',
        publisher: 'fullstack encore',
      },
      {
        id: uuid(),
        title: 'ng-book 3',
        author: 'fullstack 3',
        publisher: 'fullstack encore et encore',
      },
    ];
    return { books };
  }

  genId(books: IBook[]): string {
    return uuid();
  }
}
