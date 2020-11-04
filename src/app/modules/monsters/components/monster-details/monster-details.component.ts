import { Component, Input, OnInit } from '@angular/core';
import { monster } from '../../models/monster';
import { MonstersService } from '../../services/monsters.service';

@Component({
    selector: 'app-monster-details',
    templateUrl: './monster-details.component.html',
    styleUrls: ['./monster-details.component.scss']
})
export class MonsterDetailsComponent implements OnInit {
    @Input()
    public monsterIndex: string;

    public monster: monster;

    constructor(private _monstersService: MonstersService) { }

    public ngOnInit(): void {
        this._monstersService.getMonster(this.monsterIndex).subscribe(m => this.monster = m);
    }
}