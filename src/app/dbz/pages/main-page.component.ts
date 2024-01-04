import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import {
	Character,
	CharacterWithoutID,
} from '../interfaces/character.interface';

@Component({
	selector: 'app-dbz-main-page',
	templateUrl: './main-page.component.html',
})
export class MainPageComponent {
	constructor(private dbzService: DbzService) {}

	get characters(): Character[] {
		return this.dbzService.characters;
	}

	onNewCharacter(character: CharacterWithoutID) {
		this.dbzService.addCharacter(character);
	}

	onDeleteCharacter(id: string) {
		this.dbzService.deleteCharacterByID(id);
	}
}
