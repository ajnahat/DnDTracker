export class countable<T>
{
    item: T;
    count: number;

    constructor(item: T, count: number) {
        this.item = item;
        this.count = count;
    }
}