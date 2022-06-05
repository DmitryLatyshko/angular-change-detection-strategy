import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';
import {
	AsyncPipeComponent,
	AsyncPipeInnerComponent,
	AsyncPipeInnerV2Component,
	AsyncPipeOuterComponent,
	AsyncPipeOuterV2Component,
	DefaultComponent,
	DefaultInnerComponent,
	DefaultOuterComponent,
	ExampleComponent,
	ExampleInnerComponent,
	ExampleInnerV2Component, ExampleInnerV2InnerComponent,
	ExampleOuterComponent,
	ExampleOuterV2Component,
	OnPush2RoutingModule,
	OnPushRoutingModule,
	RouteOneComponent,
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
	RouteTwoTwoComponent,
	TemplateVariablesComponent,
	TemplateVariablesInnerComponent,
	TemplateVariablesInnerV2Component,
	TemplateVariablesOuterComponent,
	TemplateVariablesOuterV2Component
} from "../libs";

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
		redirectTo: '/onpush/route-one',
	},
	{
		path: '2-onpush',
		redirectTo: '/2-onpush/async-pipe',
	},
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

const onPush2Components = [
	AsyncPipeComponent,
	AsyncPipeOuterComponent,
	AsyncPipeInnerComponent,
	AsyncPipeOuterV2Component,
	AsyncPipeInnerV2Component,
	TemplateVariablesComponent,
	TemplateVariablesOuterComponent,
	TemplateVariablesInnerComponent,
	TemplateVariablesOuterV2Component,
	TemplateVariablesInnerV2Component,
	ExampleComponent,
	ExampleOuterComponent,
	ExampleInnerComponent,
	ExampleOuterV2Component,
	ExampleInnerV2Component,
	ExampleInnerV2InnerComponent,
];

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		defaultComponents,
		onPushComponents,
		onPush2Components
	],
	imports: [
		CommonModule,
		BrowserModule,
		OnPushRoutingModule,
		OnPush2RoutingModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
