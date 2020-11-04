import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EncountersComponent } from '../../../encounters/components/encounters/encounters.component';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { user } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    @ViewChild(EncountersComponent) encounters: EncountersComponent;

    public isEditing: boolean;
    public currentUser: user;

    constructor(private _userService: UserService,
        private _router: Router,
        private _dialog: MatDialog,
        private _snackBar: MatSnackBar) { }

    private deleteUser(id: number) {
        this._userService
            .deleteUser(id)
            .subscribe(null,
                null,
                () => {
                    this._userService.setCurrentUser(null);
                    this._router.navigate(["/login"]);
                    this._snackBar.open("Your account has been deleted", "X", { duration: 3000 });
                });
    }

    public ngOnInit(): void {
        this.currentUser = this._userService.getCurrentUser();
    }

    public refreshEncounters() {
        this.encounters.fillEncounters();
    }

    public signOut() {
        this._userService.setCurrentUser(null);
        this._router.navigate(["/login"]);
    }

    public tryDeleteUser() {
        let diagRef = this._dialog.open(ConfirmDialogComponent, {
            data:
            {
                title: "Confirm Deletion",
                prompt: "Are you sure you want to delete your account? This action is irreversible.",
                confirm: "Yes",
                cancel: "No"
            }
        });
        diagRef.afterClosed().subscribe(result => {
            if (result)
            {
                this.deleteUser(this._userService.getCurrentUser().userId);
            }
        });
    }

    public commitChanges() {
        this._userService
            .editUser(this.currentUser)
            .subscribe(null,
                null,
                () => this.isEditing = false);
    }

    public abandonChanges() {
        this._userService.getUser(this.currentUser.userId).subscribe(u => this.currentUser = u);
        this.isEditing = false;
    }
}