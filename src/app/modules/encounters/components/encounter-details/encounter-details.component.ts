import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { encounter } from '../../models/encounter';

@Component({
    selector: 'app-encounter-details',
    templateUrl: './encounter-details.component.html',
    styleUrls: ['./encounter-details.component.scss']
})
export class EncounterDetailsComponent implements OnChanges{
    @Input()
    encounter: encounter;

    @Input()
    isEditing: boolean;

    ngOnChanges(changes: SimpleChanges): void {
    }
}