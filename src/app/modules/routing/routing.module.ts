import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from '../monsters/components/monsters/monsters.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { CreateUserComponent } from '../users/components/create-user/create-user.component';
import { LoginComponent } from '../users/components/login/login.component';
import { UserComponent } from '../users/components/user/user.component';
import { UserGuard } from '../users/guards/user.guard';

const routes: Routes = [
    { path: "monsters", component: MonstersComponent },
    { path: "user/:id", component: UserComponent, canActivate: [UserGuard] },
    { path: "login", component: LoginComponent },
    { path: "create-user", component: CreateUserComponent },
    { path: "", redirectTo: "monsters", pathMatch: "full" },
    { path:"**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }