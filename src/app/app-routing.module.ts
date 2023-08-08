import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
