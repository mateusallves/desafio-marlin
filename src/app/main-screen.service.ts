import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Client } from '../assets/client.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainScreenService {
  onlineApi = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes/';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) {}
  //Alerta na tela, quando uma indicação é concluída
  showOnConsole(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  //Etapa 1- ler a api e mostra-la na tela

  readApi(): Observable<Client[]> {
    return this.http.get<Client[]>(this.onlineApi).pipe(map((obj: any) => obj));
  }

  // Etapa 2- Criar um novo client
  createClient(client: Client) {
    return this.http
      .post<Client>(this.onlineApi, client)
      .pipe(map((obj) => obj));
  }

  //
  readById(id: Number): Observable<Client> {
    const url = `${this.onlineApi}/${id}`;
    return this.http.get<Client>(url).pipe(map((obj) => obj));
  }

  //4ª Etapa- Deletar um elemento
  delete(id: Number): Observable<Client> {
    const url = `${this.onlineApi}/${id}`;
    return this.http.delete<Client>(url).pipe(map((obj) => obj));
  }
}
