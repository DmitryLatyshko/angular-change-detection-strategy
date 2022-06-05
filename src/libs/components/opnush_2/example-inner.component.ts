import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {ToDo} from "./example.component";

@Component({
	selector: 'example-todos',
	template: `
		<h2>It's example todos componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<p *ngFor="let item of todos">{{item.title}} - {{runChangeDetection}}</p>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInnerComponent {
	@Input()
	public todos: ToDo[];
	public get runChangeDetection(): boolean {
		console.log('example-todos - checking the view.');
		return true;
	}
}
