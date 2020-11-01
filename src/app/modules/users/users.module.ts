import { NgModule } from '@angular/core';
import { EncountersModule } from '../encounters/encounters.module';
import { SharedModule } from '../shared/shared.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
    imports: [
        SharedModule,
        EncountersModule
    ],
    declarations: [UserComponent, LoginComponent, CreateUserComponent]
    
})
export class UsersModule { }