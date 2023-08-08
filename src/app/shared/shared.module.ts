import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
	declarations: [
		SidebarComponent,
		SearchBoxComponent
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		SidebarComponent,
		SearchBoxComponent
	]
})
export class SharedModule { }
