import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";

@Component({
	selector: 'route-three-one',
	template: `
		<h2>1. detectChanges()</h2>
		<h3>Count: {{count}}</h3>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeOneComponent {
	public count = 0;
	constructor(private readonly _changeDecetor: ChangeDetectorRef) {
		setTimeout(() => {
			this.count = 5;
			this._changeDecetor.detectChanges();
		}, 1000 * 2);
	}
}
