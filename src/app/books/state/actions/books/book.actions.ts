import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IBook } from 'src/app/books/models/book';
import { BookError } from 'src/app/books/types/error';

export const EditBookGroup = createActionGroup({
  source: 'BOOK',
  events: {
    'Add Book': props<{ book: IBook }>(),
    'Add Book Success': props<{ book: IBook }>(),
    'Add Book Failure': props<{ error: any }>(),
    'Delete Book': props<{ id: string }>(),
    'Delete Book Success': props<{ id: string }>(),
    'Delete Book Failure': props<{ error: any }>(),
    'Update Book': props<{ book: IBook }>(),
    'Update Book Success': props<{ book: IBook }>(),
    'Update Book Failure': props<{ error: any }>(),
  },
});
