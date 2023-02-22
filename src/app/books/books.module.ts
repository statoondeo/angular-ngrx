import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state/reducers/book/book.reducer';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './state/effects/book/books.effects';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookEffects } from './state/effects/book/book.effects';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.booksReducer),
    EffectsModule.forFeature([BooksEffects, BookEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent,
      },
    ]),
  ],
})
export class BooksModule {}
