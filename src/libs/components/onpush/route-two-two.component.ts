import {ChangeDetectionStrategy, Component} from "@angular/core";
import {of} from "rxjs";

@Component({
	selector: 'route-two-two',
	template: `
		<h2>It's route two two componnet</h2>
		<button (click)="addTwo()">Add two</button>
		<h3>Count: {{count}}</h3>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTwoTwoComponent {
	public count = 0;
	constructor() {
		setTimeout(() => this.count = 5, 1000 * 10); // dont triggered
		const interval = setInterval(() => {
			this.count = this.count + 5;
			if (this.count > 100) {
				clearInterval(interval);
			}
		}, 1000); // dont triggered
		Promise.resolve().then(() => this.count = 5); // triggered
		of(10).subscribe(res => this.count = res); // triggered
	}
	public addTwo(): void {
		this.count++;
	}
}
