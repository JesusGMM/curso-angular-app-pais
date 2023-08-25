import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
	{
		path: 'about',
		component: AboutPageComponent
	},
	{
		path: 'contact',
		component: ContactPageComponent
	},
	{
		path: 'pais',
		loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
	},
	{
		path: '**',
		redirectTo: 'pais'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
