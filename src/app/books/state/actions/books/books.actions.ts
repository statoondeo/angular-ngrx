import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IBook } from 'src/app/books/models/book';

export const LoadBooksGroup = createActionGroup({
  source: 'BOOKS',
  events: {
    'Load Books': emptyProps,
    'Load Books Success': props<{ books: IBook[] }>(),
    'Load Books Failure': props<{ error: any }>(),
  },
});
