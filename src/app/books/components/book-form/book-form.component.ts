import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { IBook } from '../../models/book';
import { EditBookGroup } from '../../state/actions/books/book.actions';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
})
export class BookFormComponent implements OnInit, OnDestroy {
  public bookForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    author: new FormControl('', [Validators.required, Validators.minLength(5)]),
    publisher: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  public get id() {
    return this.bookForm.controls.id;
  }
  public get title() {
    return this.bookForm.controls.title;
  }
  public get author() {
    return this.bookForm.controls.author;
  }
  public get publisher() {
    return this.bookForm.controls.publisher;
  }
  constructor(private store: Store, private actionsSubject: ActionsSubject) {}

  ngOnDestroy(): void {
    this.actionsSubject.unsubscribe();
  }

  public ngOnInit(): void {
    this.actionsSubject
      .pipe(
        ofType(EditBookGroup.addBookSuccess, EditBookGroup.updateBookSuccess)
      )
      .subscribe(() => this.bookForm.reset());
  }

  public onSubmit(): void {
    const id = this.bookForm.value.id;
    if (!id || id === undefined || id === '' || id.length === 0) {
      console.log('Dispatch Add');
      this.store.dispatch(
        EditBookGroup.addBook({
          book: {
            id: null,
            author: this.author.value || '',
            title: this.title.value || '',
            publisher: this.publisher.value || '',
          },
        })
      );
    } else {
      console.log('Dispatch Update');
      this.store.dispatch(
        EditBookGroup.updateBook({
          book: {
            id: this.id.value,
            author: this.author.value || '',
            title: this.title.value || '',
            publisher: this.publisher.value || '',
          },
        })
      );
    }
  }

  public onBookEdit(book: IBook) {
    this.bookForm.patchValue({
      id: book.id,
      title: book.title,
      author: book.author,
      publisher: book.publisher,
    });
  }
}
