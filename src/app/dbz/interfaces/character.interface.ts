export interface Character {
	id: string;
	name: string;
	power: number;
}

export interface CharacterWithoutID extends Omit<Character, 'id'> {}
