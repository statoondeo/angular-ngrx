import { Action, createReducer, on } from '@ngrx/store';
import { IBook } from 'src/app/books/models/book';
import { BookError } from 'src/app/books/types/error';
import { EditBookGroup } from '../../actions/books/book.actions';
import { LoadBooksGroup } from '../../actions/books/books.actions';

export const booksFeatureKey = 'books';

export interface IBooksState {
  books: IBook[];
  selectedBook?: IBook;
  error: BookError;
}

export interface IState {
  readonly [booksFeatureKey]: IBooksState[];
}

export const initialState: IBooksState = {
  books: [],
  error: null,
};

export const booksReducer = createReducer(
  initialState,

  on(LoadBooksGroup.loadBooks, (state) => {
    console.log('Reduce Load');
    return {
      ...state,
    };
  }),

  on(LoadBooksGroup.loadBooksSuccess, (state, { books }) => {
    console.log('Reduce Load Success');
    return {
      ...state,
      books: books,
    };
  }),

  on(LoadBooksGroup.loadBooksFailure, (state, { error }) => {
    console.log('Reduce Load Failure');
    return {
      ...state,
      error: error,
    };
  }),

  on(EditBookGroup.addBook, (state) => {
    console.log('Reduce Add');
    return {
      ...state,
    };
  }),

  on(EditBookGroup.addBookSuccess, (state, { book }) => {
    console.log('Reduce Add Success');
    return {
      ...state,
      books: state.books.concat(book),
      selectedBook: book,
    };
  }),

  on(EditBookGroup.addBookFailure, (state, { error }) => {
    console.log('Reduce Add Failure : ', error);
    return {
      ...state,
      error: error,
    };
  }),

  on(EditBookGroup.updateBook, (state) => {
    console.log('Reduce Update');
    return {
      ...state,
    };
  }),

  on(EditBookGroup.updateBookSuccess, (state, { book }) => {
    console.log('Reduce Update Success');
    return {
      ...state,
      books: state.books.map((existingBook) =>
        existingBook.id === book.id ? book : existingBook
      ),
      selectedBook: book,
    };
  }),

  on(EditBookGroup.updateBookFailure, (state, { error }) => {
    console.log('Reduce Update Failure');
    return {
      ...state,
      error: error,
    };
  }),

  on(EditBookGroup.deleteBook, (state) => {
    console.log('Reduce Delete');
    return {
      ...state,
    };
  }),

  on(EditBookGroup.deleteBookSuccess, (state, id) => {
    console.log('Reduce Delete Failure');
    return {
      ...state,
      books: state.books.filter((b) => (b.id || '').toString() !== id.id),
    };
  }),

  on(EditBookGroup.deleteBookFailure, (state, { error }) => {
    console.log('Reduce Delete Failure');
    return {
      ...state,
      error: error,
    };
  })
);
