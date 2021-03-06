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
    public userName: string;

    constructor(private _userService: UserService,
        private _authService: AuthenticationService,
        private _router: Router,
        private _snackBar: MatSnackBar) { }

    public login() {
        this._authService.attemptlogIn(this.userName)
            .subscribe(user => {
                this._userService.setCurrentUser(user);
                this._router.navigate(["/user", this._userService.getCurrentUser().userId]);
            },
                () => this._snackBar.open("There is no user by that name.", "X", { verticalPosition: "top" }));
    }

    public createAccount() {
        this._router.navigate(["/create-user"]);
    }

    public ngOnDestroy(): void {
        this._snackBar.dismiss();
    }
}