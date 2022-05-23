import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-three-three',
	template: `
		<h2>3. markForCheck()</h2>
		<route-three-three-outer></route-three-three-outer>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteThreeThreeComponent {
}
