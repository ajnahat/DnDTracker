import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MonsterDetailsComponent } from './components/monster-details/monster-details.component';
import { MonstersComponent } from './components/monsters/monsters.component';

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