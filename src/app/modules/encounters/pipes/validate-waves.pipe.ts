import { Pipe, PipeTransform } from '@angular/core';
import { wave } from '../models/wave';
import { monster } from '../../monsters/models/monster';
import { countable } from '../../shared/models/countable';

@Pipe({
    name: 'validateWaves',
    pure: false
})
export class ValidateWavesPipe implements PipeTransform {

    transform(value: wave[]): boolean {
        if (value == null)
        {
            return false;
        }
        let monsters: countable<monster>[] = [];
        value.forEach(o => monsters.push(...o.monsters));
        return monsters.every(o => o.item != null && o.count > 0);
    }
}