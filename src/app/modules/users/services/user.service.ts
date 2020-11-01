import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _url: string = "http://localhost:5000/api/users";
    private _currentUser: user;

    constructor(private _http: HttpClient) { }

    public createUser(userName: string): Observable<user> {
        return this._http.post<user>(this._url, { UserName: userName });
    }

    public setCurrentUser(user: user) {
        this._currentUser = user;
    }

    public getCurrentUser(): user {
        return this._currentUser;
    }

    public getUsers(): Observable<user[]> {
        return this._http.get<user[]>(this._url);
    }

    public getUser(userId: number): Observable<user> {
        return this._http.get<user>(`${this._url}/${userId}`);
    }
}