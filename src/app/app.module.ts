import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';
import {
	DefaultComponent,
	DefaultInnerComponent,
	DefaultOuterComponent,
	OnPushRoutingModule,
	RouteOneInnerComponent,
	RouteOneOuterComponent,
	RouteThreeComponent,
	RouteThreeOneComponent,
	RouteThreeThreeComponent,
	RouteThreeThreeInnerComponent,
	RouteThreeThreeOuterComponent,
	RouteThreeTwoComponent,
	RouteTwoComponent,
	RouteTwoOneComponent,
	RouteTwoTwoComponent
} from "../libs";
import {RouteOneComponent} from "../libs/components/onpush/route-one.component";

const appRoutes: Routes = [
	{
		path: '',
		component: MainComponent,
	},
	{
		path: 'main',
		component: MainComponent,
	},
	{
		path: 'default',
		component: DefaultComponent,
	},
	{
		path: 'onpush',
		redirectTo: '/onpush/route-one'
	}
];

const defaultComponents = [
	DefaultComponent,
	DefaultOuterComponent,
	DefaultInnerComponent,
];

const onPushComponents = [
	RouteOneComponent,
	RouteOneOuterComponent,
	RouteOneInnerComponent,
	RouteTwoComponent,
	RouteTwoOneComponent,
	RouteTwoTwoComponent,
	RouteThreeComponent,
	RouteThreeOneComponent,
	RouteThreeTwoComponent,
	RouteThreeThreeComponent,
	RouteThreeThreeOuterComponent,
	RouteThreeThreeInnerComponent,
];

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		defaultComponents,
		onPushComponents
	],
	imports: [
		CommonModule,
		BrowserModule,
		OnPushRoutingModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
