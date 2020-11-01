import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-alphabet-selector',
    templateUrl: './alphabet-selector.component.html',
    styleUrls: ['./alphabet-selector.component.scss']
})
export class AlphabetSelectorComponent {
    public selectedLetter: string;

    @Output()
    letterClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    letterClick(letter: string) {
        if (this.selectedLetter != letter)
        {
            this.selectedLetter = letter;
            this.letterClicked.emit(this.selectedLetter);
        }
    }
}