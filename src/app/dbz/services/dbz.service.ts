import { Injectable } from '@angular/core';
import {
	Character,
	CharacterWithoutID,
} from '../interfaces/character.interface';

@Injectable({
	providedIn: 'root',
})
export class DbzService {
	characters: Character[] = [
		{
			id: crypto.randomUUID(),
			name: 'Picoro',
			power: 4000,
		},
		{
			id: crypto.randomUUID(),
			name: 'Son Goku',
			power: 10000,
		},
		{
			id: crypto.randomUUID(),
			name: 'Gohan',
			power: 8000,
		},
	];

	addCharacter(character: CharacterWithoutID) {
		const newCharacter: Character = { ...character, id: crypto.randomUUID() };

		this.characters.push(newCharacter);
	}

	deleteCharacterByID(id: string) {
		this.characters = this.characters.filter(
			(character) => character.id !== id
		);
	}
}
