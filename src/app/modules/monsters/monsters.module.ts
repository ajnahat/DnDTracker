import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MonsterDetailsComponent } from './components/monster-details/monster-details.component';

@NgModule({
    declarations: [
        MonstersComponent,
        MonsterDetailsComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MonsterDetailsComponent
    ]
})
export class MonstersModule { }