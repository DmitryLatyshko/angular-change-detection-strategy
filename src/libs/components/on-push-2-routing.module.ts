import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AsyncPipeComponent, ExampleComponent, TemplateVariablesComponent} from "./opnush_2";

const routes: Routes = [
	{
		path: '2-onpush/async-pipe',
		component: AsyncPipeComponent,
	},
	{
		path: '2-onpush/template-variables',
		component: TemplateVariablesComponent,
	},
	{
		path: '2-onpush/example',
		component: ExampleComponent,
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OnPush2RoutingModule {
}
