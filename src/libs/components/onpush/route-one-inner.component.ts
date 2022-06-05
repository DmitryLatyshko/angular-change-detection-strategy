import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";

let triggerCounter: number = 0;

@Component({
	selector: 'route-one-inner',
	template: `
		<h2>It's route one inner componnet</h2>
		<h3>Config.position: {{config.position}}</h3>
		<h3>Trigger counter: {{triggerCounter}}!</h3>
		<h3>Changes are detected? - {{runChangeDetection}}</h3>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteOneInnerComponent implements OnInit{
	@Input()
	public config: any;
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
