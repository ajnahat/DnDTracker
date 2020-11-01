import { wave } from './wave';

export class encounter {
    encounterId: number;
    encounterName: string;
    userId: number;
    waves: wave[];

    constructor() {
        this.waves = [];
    }
}