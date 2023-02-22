import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { IBook } from 'src/app/books/models/book';
import { BooksService } from 'src/app/books/services/books.service';
import { BookError } from 'src/app/books/types/error';
import { EditBookGroup } from '../../actions/books/book.actions';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditBookGroup.addBook),
      mergeMap(({ book }) =>
        this.booksService.addBook(book).pipe(
          tap(() => console.log('Effect Add')),
          map((book: IBook) => {
            console.log('Dispatch Add Success : ', { book });
            return EditBookGroup.addBookSuccess({ book });
          }),
          catchError((error) => {
            console.log('Dispatch Add Failure : ', error.body.error);
            return of(
              EditBookGroup.addBookFailure({ error: error.body.error })
            );
          })
        )
      )
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditBookGroup.updateBook),
      mergeMap(({ book }) =>
        this.booksService.updateBook(book).pipe(
          tap(() => console.log('Effect Update')),
          map(() => {
            console.log('Dispatch Update Success : ', { book });
            return EditBookGroup.updateBookSuccess({ book });
          }),
          catchError((error) => {
            console.log('Dispacth Update Failure : ', error.body.error);
            return of(
              EditBookGroup.updateBookFailure({ error: error.body.error })
            );
          })
        )
      )
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditBookGroup.deleteBook),
      mergeMap(({ id }) =>
        this.booksService.deleteBook(id).pipe(
          tap(() => console.log('Effect Delete')),
          map(() => {
            console.log('Dispatch Delete Success : ', { id });
            return EditBookGroup.deleteBookSuccess({ id });
          }),
          catchError((error) => {
            console.log('Dispatch Delete Failure : ', error.body.error);
            return of(
              EditBookGroup.deleteBookFailure({ error: error.body.error })
            );
          })
        )
      )
    )
  );
}
