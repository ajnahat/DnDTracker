import { Component, OnInit } from '@angular/core';
import { monster } from '../../models/monster';
import { MonstersService } from '../../services/monsters.service';

@Component({
    templateUrl: './monsters.component.html',
    styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
    monsters: monster[] = [];
    filteredMonsters: monster[] = [];
    title = 'Monsters';

    constructor(private _monstersService: MonstersService) { }

    ngOnInit(): void {
        this._monstersService.getMonsters()
            .subscribe(data => this.monsters.push(...data), null, () => this.letterClicked("A"));
    }

    letterClicked(letter: string) {
        this.filteredMonsters = this.monsters.filter(o => o.name[0] == letter);
    }
}