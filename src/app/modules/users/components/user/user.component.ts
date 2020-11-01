import { Component, OnInit, ViewChild } from '@angular/core';
import { EncountersComponent } from '../../../encounters/components/encounters/encounters.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    @ViewChild(EncountersComponent) encounters: EncountersComponent;

    public get userName(): string { return this._userService.getCurrentUser().userName; }

    constructor(private _userService: UserService,
        private _router: Router) { }

    ngOnInit(): void {
    }

    refreshEncounters() {
        this.encounters.fillEncounters();
    }

    signOut() {
        this._userService.setCurrentUser(null);
        this._router.navigate(["/login"]);
    }
}