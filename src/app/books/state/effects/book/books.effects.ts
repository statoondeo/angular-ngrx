import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { IBook } from 'src/app/books/models/book';
import { BooksService } from 'src/app/books/services/books.service';
import { LoadBooksGroup } from '../../actions/books/books.actions';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadBooksGroup.loadBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          tap(() => console.log('Effect Load')),
          map((books: IBook[]) => {
            console.log('Dispatch Load Success', { books });
            return LoadBooksGroup.loadBooksSuccess({ books });
          }),
          catchError((error) => {
            console.log('Dispatch Load Failure : ', error.body.error);
            return of(
              LoadBooksGroup.loadBooksFailure({ error: error.body.error })
            );
          })
        )
      )
    )
  );
}
