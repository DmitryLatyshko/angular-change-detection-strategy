import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

let triggerCounter: number = 0;

@Component({
	selector: 'default-inner',
	template: `
		<h2>It's default inner componnet</h2>
		<h3>Trigger counter: {{triggerCounter}}!</h3>
		<h3>Changes are detected? - {{runChangeDetection}}</h3>
	`,
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
}
