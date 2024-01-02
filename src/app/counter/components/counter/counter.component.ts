import { Component } from '@angular/core';

@Component({
	selector: 'app-counter',
	template: `
		<p>Counter Value: {{ counter }}</p>

		<button (click)="incrementCounter()">+1</button>
		<button (click)="decrementCounter()">-1</button>
		<button (click)="resetCounter()">RESET</button>
	`,
})
export class CounterComponent {
	counter = 0;

	incrementCounter() {
		this.counter++;
	}

	decrementCounter() {
		if (this.counter < 1) return;

		this.counter--;
	}

	resetCounter() {
		this.counter = 0;
	}
}
