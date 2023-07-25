import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GenericInterceptor<T> implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

          const modifiedResponse = this.modifyResponse(event.body);
          return event.clone({ body: modifiedResponse });
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {

        console.error('HTTP Error:', error);
        this.handleHttpError(error);
        return throwError(error);
      })
    );
  }

  protected modifyResponse(response: T): T {
    return response;
  }

  protected handleHttpError(error: HttpErrorResponse): void {
    this.snackBar.open(`Ups! ha ocurrido un error ${error}`, 'Close', {
      duration: 5000,
    });
  }
}
