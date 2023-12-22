// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;

  constructor() {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }
  login(username: string, password: string): Observable<boolean> {
    // En una implementación real, esta lógica debería comunicarse con un servidor de autenticación
    // y devolver un observable con el resultado del inicio de sesión.

    return new Observable<boolean>((observer) => {
      setTimeout(() => {
        this.isAuthenticatedSubject.next(true);
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    // En una implementación real, esta lógica debería comunicarse con un servidor de autenticación
    // para cerrar la sesión del usuario.

    setTimeout(() => {
      this.isAuthenticatedSubject.next(false);
    }, 500);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
