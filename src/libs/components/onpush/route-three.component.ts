import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-three',
	styleUrls: ['./onpush.scss'],
	templateUrl: './route-three.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeComponent {
	public dlBlockOne = `@Component({
	selector: 'route-three-one',
	template: \`
		<h2>1. detectChanges()</h2>
		<h3>Count: {{count}}</h3>
	\`,
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
}`;

	public dlBlockTwo = `@Component({
	selector: 'route-three-two',
	template: \`
		<h2>1. ApplicationRef.tick()</h2>
		<h3>Count: {{count}}</h3>
		<button (click)="updateApp()">Update app</button>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeTwoComponent {
	public count = 0;
	constructor(private appRef: ApplicationRef) {
		const interval = setInterval(() => {
			this.count = this.count + 5;
			if (this.count > 100) {
				clearInterval(interval);
			}
		}, 1000);
	}
	public updateApp(): void {
		this.appRef.tick();
	}
}`;

	public dlBlockTwoCode = `tick() {
	try {
		this._views.forEach((view) => view.detectChanges());
		...
	} catch (e) {
	...
	}
}`;

	public dlBlockThreeOuter = `@Component({
	selector: 'route-three-three-outer',
	template: \`
		<h2>It's route three three outer component:</h2>
		<button (click)="onClick()">Trigger detectChanges</button>
		<route-three-three-inner></route-three-three-inner>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeThreeOuterComponent {
	constructor(private readonly _changeDecetor: ChangeDetectorRef) {
	}
	public onClick(): void {
		this._changeDecetor.detectChanges();
	}
}`;

	public dlBlockThreeInner = `@Component({
	selector: 'route-three-three-inner',
	template: \`
		<h2>It's route three three inner component:</h2>
		<button (click)="onClick()">Run timeout</button>
		<h3>Count: {{count}}</h3>
	\`,
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
}`;

	public dlBlockThreeCode = `markForCheck(): void { 
	markParentViewsForCheck(this._view); 
}

export function markParentViewsForCheck(view: ViewData) {
	let currView: ViewData|null = view;
	while (currView) {
		if (currView.def.flags & ViewFlags.OnPush) {
			currView.state |= ViewState.ChecksEnabled;
		}
		currView = currView.viewContainerParent || currView.parent;
	}
}`;
}
