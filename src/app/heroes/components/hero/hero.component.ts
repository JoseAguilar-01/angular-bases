import { Component } from '@angular/core';

@Component({
	selector: 'app-heroes-hero',
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.css',
})
export class HeroComponent {
	readonly defaultName = 'Ironman';
	readonly defaultAge = 44;
	name = this.defaultName;
	age = this.defaultAge;

	changeName() {
		this.name = 'Flash';
	}

	changeAge() {
		this.age = 28;
	}

	resetData() {
		this.name = 'Ironman';
		this.age = 44;
	}

	getHeroData() {
		return `${this.name} - ${this.age}`;
	}

	get uppercasedName() {
		return this.name.toUpperCase();
	}

	get showChangeNameButton() {
		return this.name === this.defaultName;
	}

	get showChangeAgeButton() {
		return this.age === this.defaultAge;
	}

	get showResetDataButton() {
		return !this.showChangeAgeButton || !this.showChangeNameButton;
	}
}
