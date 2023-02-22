import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Data } from './data/data';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: { strictActionTypeUniqueness: true },
      }
    ),
    StoreDevtoolsModule.instrument({
      name: 'ngrx Starter',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([]),
    RouterModule.forChild([
      {
        path: 'books',
        component: BooksComponent,
      },
    ]),
    InMemoryWebApiModule.forRoot(Data),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
