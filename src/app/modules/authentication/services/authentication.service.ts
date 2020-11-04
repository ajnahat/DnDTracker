import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../users/models/user';

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