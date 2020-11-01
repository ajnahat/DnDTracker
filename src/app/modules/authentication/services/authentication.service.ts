import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../../users/models/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private _url: string = "http://localhost:5000/api/authentication";
    constructor(private _http: HttpClient) { }

    public attemptlogIn(userName: string): Observable<user> {
        return this._http.post<user>(`${this._url}`, { UserName: userName });
    }
}