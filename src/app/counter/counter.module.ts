import { NgModule } from '@angular/core';
import { CounterComponent } from './components';

@NgModule({
	declarations: [CounterComponent],
	exports: [CounterComponent],
})
export class CounterModule {}
