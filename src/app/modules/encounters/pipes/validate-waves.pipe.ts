import { Pipe, PipeTransform } from '@angular/core';
import { monster } from '../../monsters/models/monster';
import { wave } from '../models/wave';

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
        let monsters: monster[] = [];
        value.forEach(o => monsters.push(...o.monsters));
        return monsters.every(o => o != null && o.count > 0 && o.index != "" && o.index != null);
    }
}