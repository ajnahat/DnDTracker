import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnDestroy {
    public userName: string;

    constructor(private _router: Router,
        private _userService: UserService,
        private _snackBar: MatSnackBar) { }

    public createUser() {
        this._userService
            .createUser(this.userName)
            .subscribe(user => this._userService.setCurrentUser(user),
                () => this._snackBar.open("There is already a user with that name. Please choose another.", "X", { verticalPosition: "top" }),
                () => this._router.navigate(['/user', this._userService.getCurrentUser().userId]));
    }

    public ngOnDestroy(): void {
        this._snackBar.dismiss();
    }
}