import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksFeatureKey, IBooksState } from '../../reducers/book/book.reducer';

const selectRoot = createFeatureSelector<IBooksState>(booksFeatureKey);

export const getBooks = createSelector(
  selectRoot,
  (books: IBooksState) => books.books
);
export const getError = createSelector(
  selectRoot,
  (books: IBooksState) => books.error
);
