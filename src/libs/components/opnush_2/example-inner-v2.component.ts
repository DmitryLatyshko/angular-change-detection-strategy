import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {ToDo} from "./example.component";

@Component({
	selector: 'example-todos-v2',
	template: `
		<h2>It's example todos V2 componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<example-todo [todo]="item" *ngFor="let item of todos"></example-todo>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInnerV2Component {
	@Input()
	public todos: ToDo[];
}
