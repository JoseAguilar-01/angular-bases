import { NgModule } from '@angular/core';
import { HeroComponent, ListComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [HeroComponent, ListComponent],
	exports: [HeroComponent, ListComponent],
	imports: [CommonModule],
})
export class HeroesModule {}
