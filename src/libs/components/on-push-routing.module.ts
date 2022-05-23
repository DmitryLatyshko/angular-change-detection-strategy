import {RouterModule, Routes} from "@angular/router";
import {RouteOneComponent} from "./onpush/route-one.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouteThreeComponent, RouteTwoComponent} from "./onpush";

const routes: Routes = [
	{
		path: 'onpush/route-one',
		component: RouteOneComponent,
	},
	{
		path: 'onpush/route-two',
		component: RouteTwoComponent,
	},
	{
		path: 'onpush/route-three',
		component: RouteThreeComponent,
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, BrowserModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OnPushRoutingModule {
}
