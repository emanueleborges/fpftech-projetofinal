import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Sale } from './sale.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  baseUrl = "https://fpfbackend.herokuapp.com/api/vendas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.baseUrl, sale).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  read(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Sale> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Sale>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(sale: Sale): Observable<Sale> {
    const url = `${this.baseUrl}/${sale.id}`
    return this.http.put<Sale>(url, sale).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Sale> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Sale>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
}
