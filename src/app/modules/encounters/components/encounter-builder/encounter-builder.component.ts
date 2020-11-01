import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { monster } from '../../../monsters/models/monster';
import { MonstersService } from '../../../monsters/services/monsters.service';
import { countable } from '../../../shared/models/countable';
import { encounter } from '../../models/encounter';
import { wave } from '../../models/wave';
import { EncountersService } from '../../services/encounters.service';

@Component({
    selector: 'app-encounter-builder',
    templateUrl: './encounter-builder.component.html',
    styleUrls: ['./encounter-builder.component.scss']
})
export class EncounterBuilderComponent implements OnInit {
    public encounterName: string;
    public waves: wave[] = [];
    public monsters: monster[] = [];

    @Input()
    public encounter: encounter;

    @Output()
    public encounterBuilt: EventEmitter<any> = new EventEmitter<any>();

    constructor(private _encounterService: EncountersService,
        private _monsterService: MonstersService) { }

    private initialize(encounter: encounter) {
        this.encounterName = encounter.encounterName;
        encounter.waves.forEach(w => {
            let wave = this.addWave();
            w.monsters.forEach(m => {
                let monst = this.addMonster(wave);
                monst.count = m.count;
                monst.item = this.monsters.find(o => o.index == m.item.index);
            });
        });
    }

    private reset() {
        this.encounterName = "";
        this.waves = [];
        this.addWaveAndMonster();
    }

    private addWave(): wave {
        let w = new wave();
        this.waves.push(w);
        return w;
    }

    public addMonster(wave: wave): countable<monster> {
        let m = new countable<monster>(null, 1);
        wave.monsters.push(m);
        return m;
    }

    public addWaveAndMonster() {
        let w = this.addWave();
        this.addMonster(w);
    }

    public deleteMonster(wave: wave, monsterIndex: number) {
        wave.monsters.splice(monsterIndex, 1);
    }

    public deleteWave(waveIndex: number) {
        this.waves.splice(waveIndex, 1);
    }

    public createEncounter() {
        this._encounterService.createEncounter(this.waves, this.encounterName).subscribe(enc =>
            this.encounterBuilt.emit(enc));
        this.reset();
    }

    public ngOnInit(): void {
        this._monsterService.getMonsters().subscribe(data => this.monsters.push(...data),
            null,
            () => {
                if (this.encounter != null)
                {
                    this.initialize(this.encounter);

                } else
                {
                    this.addWaveAndMonster();
                }
            });
    }
}