import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterWithoutID } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-add-character',
	templateUrl: './add-character.component.html',
	styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
	@Output()
	onNewCharacter: EventEmitter<CharacterWithoutID> = new EventEmitter();

	character: CharacterWithoutID = {
		name: '',
		power: 0,
	};

	emitCharacter() {
		if (!this.character.name) return;

		this.onNewCharacter.emit(this.character);

		this.character = {
			name: '',
			power: 0,
		};
	}
}
