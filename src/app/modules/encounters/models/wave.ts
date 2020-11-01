import { monster } from '../../monsters/models/monster';
import { countable } from '../../shared/models/countable';

export class wave {
    waveId: number;
    sort: number;
    monsters: countable<monster>[];

    constructor() {
        this.monsters = [];
    }
}