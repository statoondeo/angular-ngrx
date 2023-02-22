import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from '../../models/book';
import { EditBookGroup } from '../../state/actions/books/book.actions';
import { LoadBooksGroup } from '../../state/actions/books/books.actions';
import { getBooks, getError } from '../../state/selectors/book/book.selectors';
import { BookError } from '../../types/error';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Output()
  public bookEdit = new EventEmitter();

  public books$?: Observable<IBook[]>;
  public selectedBook?: IBook;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.books$ = this.store.select(getBooks);
  }

  public delete(book: IBook): void {
    this.store.dispatch(
      EditBookGroup.deleteBook({ id: (book.id || '').toString() })
    );
  }

  public update(book: IBook): void {
    this.bookEdit.emit({ ...book });
  }
}
