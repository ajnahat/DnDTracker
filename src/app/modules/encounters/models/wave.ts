import { monster } from '../../monsters/models/monster';

export class wave {
    waveId: number;
    sort: number;
    monsters: monster[];

    constructor() {
        this.monsters = [];
    }
}