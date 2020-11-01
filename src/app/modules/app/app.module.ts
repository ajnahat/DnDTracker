import { NgModule } from '@angular/core';
import { EncountersModule } from '../encounters/encounters.module';
import { MonstersModule } from '../monsters/monsters.module';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';
import { AppComponent } from './components/app/app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        MonstersModule,
        UsersModule,
        EncountersModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }