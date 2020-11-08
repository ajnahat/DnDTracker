import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {
    constructor(private _userService: UserService,
        private _router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this._userService.getCurrentUser()?.userId != route.params["id"])
        {
            this._router.navigate(["/login"]);
            return false;
        }
        return true;
    }
}