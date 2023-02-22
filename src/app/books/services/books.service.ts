import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private BOOKS_API_URL = 'api/books';

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.BOOKS_API_URL);
  }

  public addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.BOOKS_API_URL, book);
  }

  public updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.BOOKS_API_URL}/${book.id}`, book);
  }

  public deleteBook(id: string): Observable<string> {
    return this.http.delete<string>(`${this.BOOKS_API_URL}/${id}`);
  }
}
