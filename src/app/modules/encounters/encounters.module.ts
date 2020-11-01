import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EncounterDetailsComponent } from './components/encounter-details/encounter-details.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { EncounterBuilderComponent } from './components/encounter-builder/encounter-builder.component';
import { MonstersModule } from '../monsters/monsters.module';
import { ValidateWavesPipe } from './pipes/validate-waves.pipe';

@NgModule({
    declarations: [EncountersComponent, EncounterDetailsComponent, EncounterBuilderComponent, ValidateWavesPipe],
    imports: [
        SharedModule,
        MonstersModule
    ],
    exports: [
        EncountersComponent, EncounterBuilderComponent
    ]
})
export class EncountersModule { }