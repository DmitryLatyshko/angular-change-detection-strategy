import {ApplicationRef, ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-three-two',
	template: `
		<h2>2. ApplicationRef.tick()</h2>
		<h3>Count: {{count}}</h3>
		<button (click)="updateApp()">Update app</button>
	`,
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
}
