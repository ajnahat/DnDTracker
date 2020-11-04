import { Component } from '@angular/core';
import { UserService } from '../../../users/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title: string = 'D&D Tracker';

    constructor(public _userService: UserService) { }

    public logOut() {
        this._userService.setCurrentUser(null);
    }
}