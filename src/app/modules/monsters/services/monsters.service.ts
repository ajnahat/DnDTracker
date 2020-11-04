import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { monster } from '../models/monster';

@Injectable({
    providedIn: "root"
})
export class MonstersService {
    _url: string = "http://www.dnd5eapi.co/api/monsters";

    constructor(private _http: HttpClient) { }

    getMonster(index: string): Observable<monster> {
        return this._http.get<monster>(`${this._url}/${index}`);
    }

    getMonsters(): Observable<monster[]> {
        return this._http
            .get<any>(this._url)
            .pipe(
                map<any, monster[]>(o => o.results)
            );
    }
}