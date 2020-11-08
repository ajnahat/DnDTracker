import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../users/services/user.service';
import { encounter } from '../../models/encounter';
import { EncountersService } from '../../services/encounters.service';

@Component({
    selector: 'app-encounters',
    templateUrl: './encounters.component.html',
    styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
    public encounters: encounter[] = [];

    constructor(private _encounterService: EncountersService,
        private _userService: UserService) { }

    public ngOnInit(): void {
        this.fillEncounters();
    }

    public fillEncounters() {
        this.encounters = [];
        this._userService
            .getEncounters()
            .subscribe(data => this.encounters.push(...data));
    }

    public deleteEncounter(id: number) {
        this._encounterService.deleteEncounter(id).subscribe(() => {
            let index = this.encounters.findIndex(o => o.encounterId == id);
            this.encounters.splice(index, 1);
        });
    }
}