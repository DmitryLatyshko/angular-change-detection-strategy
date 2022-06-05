import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'route-one',
	styleUrls: ['./onpush.scss'],
	templateUrl: './route-one.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteOneComponent {
	public dlBlockOuter = `@Component({
	selector: 'route-one-outer',
	template: \`
		<h2>It's route one outer component:</h2>
		<button (click)="onClickBottom()">Change position: bottom</button>
		<button (click)="onClickLeft()">Change position: left</button>
		<div><hr /></div>
		<route-one-inner [config]="config"></route-one-inner>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteOneOuterComponent {
	public config = {
		position: 'top',
	};
	public onClickBottom(): void {
		this.config.position = 'bottom';
	}
	public onClickLeft(): void {
		this.config = {
			position: 'left',
		};
	}
}`;
	public dlBlockInner = `@Component({
	selector: 'route-one-inner',
	template: \`
		<h2>It's route one inner componnet</h2>
		<h3>Config.position: {{config.position}}</h3>
		<h3>Trigger counter: {{triggerCounter}}!</h3>
		<h3>Changes are detected? - {{runChangeDetection}}</h3>
	\`,
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
}`;
	public dlBlockCheckChanges = `/** Returns false in our case */
if( oldValue !== newValue ) { 
  runChangeDetection();
}`;
}
