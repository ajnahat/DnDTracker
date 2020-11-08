import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { encounter } from '../models/encounter';

@Injectable({
    providedIn: 'root'
})
export class EncountersService {
    private _url = "http://localhost:5000/api/encounters";

    constructor(private _http: HttpClient) { }

    public getEncounter(id: number): Observable<encounter> {
        return this._http.get<encounter>(`${this._url}/${id}`);
    }

    public getEncounters(): Observable<encounter[]> {
        return this._http.get<encounter[]>(this._url);
    }

    public createEncounter(encounter: encounter): Observable<encounter> {
        return this._http.post<encounter>(this._url, encounter);
    }

    public editEncounter(encounter: encounter): Observable<encounter> {
        return this._http.put<encounter>(this._url, encounter);
    }

    public deleteEncounter(id: number) {
        return this._http.delete(`${this._url}/${id}`);
    }
}