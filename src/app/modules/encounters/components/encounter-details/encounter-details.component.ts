import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { encounter } from '../../models/encounter';
import { EncountersService } from '../../services/encounters.service';

@Component({
    selector: 'app-encounter-details',
    templateUrl: './encounter-details.component.html',
    styleUrls: ['./encounter-details.component.scss']
})
export class EncounterDetailsComponent {
    @Input()
    public encounter: encounter;
    @Output()
    public onDeleteEncounter: EventEmitter<number> = new EventEmitter<number>();

    public isEditing: boolean;

    constructor(private _dialog: MatDialog,
        private _encounterService: EncountersService) { }

    public tryDeleteEncounter() {
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
                this.onDeleteEncounter.emit(this.encounter.encounterId);
            }
        });
    }

    public commitChanges() {
        this._encounterService.editEncounter(this.encounter).subscribe();
        this.isEditing = false;
    }

    public abandonChanges() {
        this._encounterService.getEncounter(this.encounter.encounterId).subscribe(e => this.encounter = e);
        this.isEditing = false;
    }
}