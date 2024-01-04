import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent, ListComponent } from './components';

@NgModule({
	declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
	imports: [CommonModule, FormsModule],
	exports: [MainPageComponent],
})
export class DbzModule {}
