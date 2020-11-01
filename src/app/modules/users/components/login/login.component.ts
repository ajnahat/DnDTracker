import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
    userName: string;
    password: string;

    constructor(private _userService: UserService,
        private _authService: AuthenticationService,
        private _router: Router,
        private _snackBar: MatSnackBar) { }

    login() {
        this._authService.attemptlogIn(this.userName)
            .subscribe(user => this._userService.setCurrentUser(user),
                () => this._snackBar.open("There is no user by that name.", "X", { verticalPosition: "top" }),
                () => this._router.navigate(["/user", this._userService.getCurrentUser().userId]));
    }

    createAccount() {
        this._router.navigate(["/create-user"]);
    }

    ngOnDestroy(): void {
        this._snackBar.dismiss();
    }
}