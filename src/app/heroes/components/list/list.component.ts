import { Component } from '@angular/core';

@Component({
	selector: 'app-heroes-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	readonly defaultHeroes = [
		'Flash',
		'Captain America',
		'Hulk',
		'Superman',
		'Aquaman',
	];
	heroes = [...this.defaultHeroes];
	deletedHeroName = '';
	timeoutID: NodeJS.Timeout | null = null;

	deleteLastHero() {
		if (this.timeoutID) {
			clearTimeout(this.timeoutID);
		}

		this.deletedHeroName = this.heroes.pop() ?? '';

		this.timeoutID = setTimeout(() => {
			this.deletedHeroName = '';
		}, 3000);
	}

	resetHeroes() {
		this.heroes = [...this.defaultHeroes];
	}

	get showDeleteHeroButton() {
		return !!this.heroes.length;
	}
}
