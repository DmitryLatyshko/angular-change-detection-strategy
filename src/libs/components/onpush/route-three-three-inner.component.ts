import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";

@Component({
	selector: 'route-three-three-inner',
	template: `
		<h2>It's route three three inner component:</h2>
		<h3>Count: {{count}}</h3>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeThreeInnerComponent {
	public count = 0;
	constructor(private readonly _changeDecetor: ChangeDetectorRef) {
		setTimeout(() => {
			this.count = this.count + 5;
			this._changeDecetor.markForCheck();
		}, 1000 * 30);
	}
}
