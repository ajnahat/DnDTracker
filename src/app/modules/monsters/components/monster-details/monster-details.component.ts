import { Component, OnInit, Input } from '@angular/core';
import { MonstersService } from '../../services/monsters.service';
import { monster } from '../../models/monster';

@Component({
    selector: 'app-monster-details',
    templateUrl: './monster-details.component.html',
    styleUrls: ['./monster-details.component.scss']
})
export class MonsterDetailsComponent implements OnInit {
    @Input()
    monsterIndex: string;

    monster: monster;

    constructor(private _monstersService: MonstersService) { }

    ngOnInit(): void {
        this._monstersService.getMonster(this.monsterIndex).subscribe(m => this.monster = m);
    }
}