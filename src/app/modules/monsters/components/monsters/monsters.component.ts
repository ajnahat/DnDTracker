import { Component, OnInit, ViewChild } from '@angular/core';
import { AlphabetSelectorComponent } from '../../../shared/components/alphabet-selector/alphabet-selector.component';
import { monster } from '../../models/monster';
import { MonstersService } from '../../services/monsters.service';

@Component({
    templateUrl: './monsters.component.html',
    styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {
    @ViewChild(AlphabetSelectorComponent) selector: AlphabetSelectorComponent;

    public monsters: monster[] = [];
    public filteredMonsters: monster[] = [];
    public title = 'Monsters';

    constructor(private _monstersService: MonstersService) { }

    public ngOnInit(): void {
        this._monstersService.getMonsters()
            .subscribe(data => this.monsters.push(...data),
                null,
                () => this.selector.letterClick("A"));
    }

    public letterClicked(letter: string) {
        this.filteredMonsters = this.monsters.filter(o => o.name[0] == letter);
    }
}