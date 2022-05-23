import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'default-outer',
	template: `
		<h2>It's default outer component:</h2>
		<button (click)="onClick()">Trigger change detection</button>
		<div><hr /></div>
		<default-inner></default-inner>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultOuterComponent {
	public onClick(): void {
	}
}
