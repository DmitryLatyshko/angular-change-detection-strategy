import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-two',
	styleUrls: ['./onpush.scss'],
	templateUrl: './route-two.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTwoComponent {
	public dlBlockOne = `@Component({
	selector: 'route-two-one',
	template: \`
		<h2>It's route two one componnet</h2>
	<button (click)="addOne()">Add one</button>
<h3>Count: {{count}}</h3>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTwoOneComponent {
	public count = 0;
	public addOne(): void {
		this.count++;
	}
}`;
	public dlBlockTwo = `@Component({
	selector: 'route-two-two',
	template: \`
		<h2>It's route two one componnet</h2>
	<button (click)="addTwo()">Add two</button>
<h3>Count: {{count}}</h3>
	\`,
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
}`;
}
