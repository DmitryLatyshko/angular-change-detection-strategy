import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'default',
	styleUrls: ['./default.component.scss'],
	templateUrl: './default.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent {
	public dlBlockOuter = `@Component({
	selector: 'default-outer',
	template: \`
		<h2>It's default outer component:</h2>
		<button (click)="onClick()">Trigger change detection</button>
		<div><hr /></div>
		<default-inner></default-inner>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultOuterComponent {
	public onClick(): void {
	}
}`;
	public dlBlockInner = `@Component({
	selector: 'default-inner',
	template: \`
		<h2>It's default inner componnet</h2>
		<h3>Trigger counter: {{triggerCounter}}!</h3>
		<h3>Changes are detected? - {{runChangeDetection}}</h3>
	\`,
	changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultInnerComponent implements OnInit {
	public get triggerCounter(): number {
		return triggerCounter;
	}
	public get runChangeDetection(): boolean {
		console.log('Checking the view');
		triggerCounter = triggerCounter + 1;
		return true;
	}
	public ngOnInit() {
		triggerCounter = 0;
	}
}`;
}
