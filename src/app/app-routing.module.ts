import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((module) => module.BooksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
