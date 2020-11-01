import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../users/services/user.service';
import { encounter } from '../models/encounter';
import { wave } from '../models/wave';
import { countable } from '../../shared/models/countable';
import { map } from 'rxjs/operators';
import { monster } from '../../monsters/models/monster';

@Injectable({
    providedIn: 'root'
})
export class EncountersService {
    private _url = "http://localhost:5000/api";

    constructor(private _http: HttpClient,
        private _userService: UserService) { }

    getEncounters(userId: number): Observable<encounter[]> {
        let encs: encounter[] = [];
        return this._http.get<any>(`${this._url}/users/${userId}/encounters`).pipe<encounter[]>(map(o => {
            for (var i = 0; i < o.length; i++)
            {
                let e: encounter = new encounter();
                e.userId = o[i].userId;
                e.encounterId = o[i].encounterId;
                e.encounterName = o[i].encounterName;

                for (var j = 0; j < o[i].waves.length; j++)
                {
                    let w: wave = new wave();
                    w.waveId = o[i].waves[j].waveId;
                    w.sort = o[i].waves[j].sort;

                    for (var k = 0; k < o[i].waves[j].monsters.length; k++)
                    {
                        let m: countable<monster> = new countable<monster>(new monster(o[i].waves[j].monsters[k].index), o[i].waves[j].monsters[k].count);
                        w.monsters.push(m);
                    }
                    e.waves.push(w);
                }
                encs.push(e);
            }

            return encs;
        }));
    }

    getEncounter(id: number): Observable<encounter> {
        return this._http.get<any>(`${this._url}/encounters/${id}`);
    }

    createEncounter(waves: wave[], encounterName: string, userId: number = this._userService.getCurrentUser().userId): Observable<encounter> {
        return this._http.post<encounter>(`${this._url}/encounters/`,
            {
                UserId: userId,
                Waves: waves.map(o => o.monsters.map(p => new countable<string>(p.item.index, p.count))),
                EncounterName: encounterName
            });
    }

    editEncounter(encounter: encounter): Observable<encounter> {
        return this._http.put<encounter>(`${this._url}/encounters/${encounter.encounterId}`,
            {
                UserId: encounter.userId,
                Waves: encounter.waves.map(o => o.monsters.map(p => new countable<string>(p.item.index, p.count))),
                EncounterName: encounter.encounterName
            });
    }

    deleteEncounter(id: number): Observable<boolean> {
        return this._http.delete<boolean>(`${this._url}/encounters/${id}`);
    }
}