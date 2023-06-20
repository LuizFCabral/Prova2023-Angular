import { Empresa } from './empresa';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = 'http://localhost:3000/empresas';
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.url);
  }

  save(empresa: Empresa):  Observable<Empresa>{
    return this.http.post<Empresa>(this.url, empresa);
  }

  remove(empresa: Empresa): Observable<void> {
    return this.http.delete<void>(this.url + '/' + empresa.id);
  }
}
