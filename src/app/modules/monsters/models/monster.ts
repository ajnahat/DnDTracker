import { action } from './action';

export class monster {
    count: number = 1;
    sort: number;

    index: string;
    name: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    challenge_rating: number;
    xp: number;
    actions: action[];
    url: string;
}