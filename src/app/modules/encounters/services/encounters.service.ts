import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { encounter } from '../models/encounter';

@Injectable({
    providedIn: 'root'
})
export class EncountersService {
    private _url = "http://localhost:5000/api";

    constructor(private _http: HttpClient) { }

    public getEncounter(id: number): Observable<encounter> {
        return this._http.get<encounter>(`${this._url}/encounters/${id}`);
    }

    public getEncounters(): Observable<encounter[]> {
        return this._http.get<encounter[]>(`${this._url}/encounters`);
    }

    public createEncounter(encounter: encounter): Observable<encounter> {
        return this._http.post<encounter>(`${this._url}/encounters/`, encounter);
    }

    public editEncounter(encounter: encounter): Observable<encounter> {
        return this._http.put<encounter>(`${this._url}/encounters/${encounter.encounterId}`, encounter);
    }

    public deleteEncounter(id: number): Observable<boolean> {
        return this._http.delete<boolean>(`${this._url}/encounters/${id}`);
    }
}