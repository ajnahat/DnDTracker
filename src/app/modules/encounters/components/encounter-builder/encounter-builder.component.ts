import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { monster } from '../../../monsters/models/monster';
import { MonstersService } from '../../../monsters/services/monsters.service';
import { UserService } from '../../../users/services/user.service';
import { encounter } from '../../models/encounter';
import { wave } from '../../models/wave';
import { EncountersService } from '../../services/encounters.service';

@Component({
    selector: 'app-encounter-builder',
    templateUrl: './encounter-builder.component.html',
    styleUrls: ['./encounter-builder.component.scss']
})
export class EncounterBuilderComponent implements OnInit {
    @Input()
    public isNewEncounter: boolean;
    @Input()
    public encounter: encounter;
    @Output()
    public encounterBuilt: EventEmitter<any> = new EventEmitter<any>();

    private _monsters: monster[] = [];
    public monsters(wave: wave, monsterIndex: number): monster[] {
        return this._monsters.filter(o => !wave.monsters.map(p => p.index).includes(o.index) || wave.monsters[monsterIndex].index == o.index);
    }

    constructor(private _encounterService: EncountersService,
        private _monsterService: MonstersService,
        private _userService: UserService) { }

    private initialize(enc: encounter) {
        this.encounter = enc;
    }

    private reset() {
        this.encounter = new encounter();
        this.encounter.userId = this._userService.getCurrentUser().userId;
        this.addWaveAndMonster();
    }

    private addWave(): wave {
        let w = new wave();
        w.sort = this.encounter.waves.length + 1;
        this.encounter.waves.push(w);
        return w;
    }

    public ngOnInit(): void {
        this._monsterService.getMonsters().subscribe(data => this._monsters.push(...data),
            null,
            () => {
                if (this.encounter != null)
                {
                    this.initialize(this.encounter);

                } else
                {
                    this.reset();
                }
            });
    }

    public addMonster(wave: wave): monster {
        let m = new monster(null);
        m.sort = wave.monsters.length + 1;
        wave.monsters.push(m);
        return m;
    }

    public addWaveAndMonster() {
        let w = this.addWave();
        this.addMonster(w);
    }

    public deleteMonster(wave: wave, monsterIndex: number) {
        wave.monsters.splice(monsterIndex, 1);
        for (var i = monsterIndex + 1; i < wave.monsters.length; i++)
        {
            wave.monsters[i].sort--;
        }
    }

    public deleteWave(waveIndex: number) {
        for (var i = waveIndex + 1; i < this.encounter.waves.length; i++)
        {
            this.encounter.waves[i].sort--;
        }
        this.encounter.waves.splice(waveIndex, 1);
    }

    public sortWaveUp(index: number) {
        let waveBefore = this.encounter.waves[index - 1];
        let wave = this.encounter.waves[index];

        waveBefore.sort++;
        wave.sort--;

        this.encounter.waves[index] = waveBefore
        this.encounter.waves[index - 1] = wave;
    }

    public sortWaveDown(index: number) {
        let waveAfter = this.encounter.waves[index + 1];
        let wave = this.encounter.waves[index];

        waveAfter.sort--;
        wave.sort++;

        this.encounter.waves[index] = waveAfter
        this.encounter.waves[index + 1] = wave
    }

    public sortMonsterUp(wave: wave, index: number) {
        let monsterBefore = wave.monsters[index - 1];
        let monster = wave.monsters[index];

        monsterBefore.sort++;
        monster.sort--;

        wave.monsters[index] = monsterBefore;
        wave.monsters[index - 1] = monster;
    }

    public sortMonsterDown(wave: wave, index: number) {
        let monsterAfter = wave.monsters[index + 1];
        let monster = wave.monsters[index];

        monsterAfter.sort--;
        monster.sort++;

        wave.monsters[index] = monsterAfter;
        wave.monsters[index + 1] = monster;
    }

    public createEncounter() {
        this._encounterService.createEncounter(this.encounter).subscribe(enc =>
            this.encounterBuilt.emit(enc),
            null,
            () => this.reset());
    }
}