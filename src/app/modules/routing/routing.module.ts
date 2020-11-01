import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterDetailsComponent } from '../monsters/components/monster-details/monster-details.component';
import { MonstersComponent } from '../monsters/components/monsters/monsters.component';
import { LoginComponent } from '../users/components/login/login.component';
import { UserComponent } from '../users/components/user/user.component';
import { UserGuard } from '../users/guards/user.guard';
import { CreateUserComponent } from '../users/components/create-user/create-user.component';

const routes: Routes = [
    { path: "monsters", component: MonstersComponent },
    { path: "monsters/:index", component: MonsterDetailsComponent },
    { path: "user/:id", component: UserComponent, canActivate: [UserGuard] },
    { path: "login", component: LoginComponent },
    { path: "create-user", component: CreateUserComponent },
    { path: "", redirectTo: "monsters", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }