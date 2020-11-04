import { NgModule } from '@angular/core';
import { MonstersModule } from '../monsters/monsters.module';
import { SharedModule } from '../shared/shared.module';
import { EncounterBuilderComponent } from './components/encounter-builder/encounter-builder.component';
import { EncounterDetailsComponent } from './components/encounter-details/encounter-details.component';
import { EncountersComponent } from './components/encounters/encounters.component';
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