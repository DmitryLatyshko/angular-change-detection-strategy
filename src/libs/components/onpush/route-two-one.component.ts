import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-two-one',
	template: `
		<h2>It's route two one componnet</h2>
		<button (click)="addOne()">Add one</button>
		<h3>Count: {{count}}</h3>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTwoOneComponent {
	public count = 0;
	public addOne(): void {
		this.count++;
	}
}
