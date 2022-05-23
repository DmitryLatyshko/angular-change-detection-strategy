import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";

@Component({
	selector: 'route-three-three-outer',
	template: `
		<h2>It's route three three outer component:</h2>
		<button (click)="onClick()">Trigger detectChanges</button>
		<route-three-three-inner></route-three-three-inner>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeThreeOuterComponent {
	constructor(private readonly _changeDecetor: ChangeDetectorRef) {
	}
	public onClick(): void {
		this._changeDecetor.detectChanges();
	}
}
