import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadBooksGroup } from './state/actions/books/books.actions';
import { getError } from './state/selectors/book/book.selectors';
import { BookError } from './types/error';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  public error$?: Observable<BookError>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('Dispatch Load');
    this.store.dispatch(LoadBooksGroup.loadBooks());
    this.error$ = this.store.select(getError);
  }
}
