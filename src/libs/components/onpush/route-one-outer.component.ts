import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-one-outer',
	template: `
		<h2>It's route one outer component:</h2>
		<button (click)="onClickBottom()">Change position: bottom</button>
		<button (click)="onClickLeft()">Change position: left</button>
		<div><hr /></div>
		<route-one-inner [config]="config"></route-one-inner>
	`,
})
export class RouteOneOuterComponent {
	public config = {
		position: 'top',
	};
	public onClickBottom(): void {
		this.config.position = 'bottom';
	}
	public onClickLeft(): void {
		this.config = {
			position: 'left',
		};
	}
}
