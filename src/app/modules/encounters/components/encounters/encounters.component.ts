import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../users/services/user.service';
import { encounter } from '../../models/encounter';
import { EncountersService } from '../../services/encounters.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-encounters',
    templateUrl: './encounters.component.html',
    styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
    encounters: encounter[] = [];
    edits: number[] = [];

    constructor(private _encounterService: EncountersService,
        private _userService: UserService,
        private _dialog: MatDialog) { }

    ngOnInit(): void {
        this.fillEncounters();
    }

    public fillEncounters() {
        this.encounters = [];
        this._encounterService
            .getEncounters(this._userService.getCurrentUser().userId)
            .subscribe(data => this.encounters.push(...data));
    }

    public tryDeleteEncounter(id: number) {
        let diagRef = this._dialog.open(ConfirmDialogComponent, {
            data:
            {
                title: "Confirm Deletion",
                prompt: "Are you sure you want to delete this encounter?",
                confirm: "Yes",
                cancel: "No"
            }
        });
        diagRef.afterClosed().subscribe(result => {
            if (result)
            {
                this.deleteEncounter(id);
                let index = this.encounters.findIndex(o => o.encounterId == id);
                this.encounters.splice(index, 1);
            }
        })
    }

    private deleteEncounter(id: number) {
        this._encounterService.deleteEncounter(id).subscribe();
    }

    public editEncounter(id: number) {
        this.edits.push(id);
    }

    public commitChanges(id: number) {
        //edit encounter here
        this.removeFromEdits(id);
    }

    public abandonChanges(id: number) {
        this.removeFromEdits(id);
    }

    private removeFromEdits(id: number) {
        let index = this.edits.findIndex(o => o == id);
        this.edits.splice(index, 1);
    }
}