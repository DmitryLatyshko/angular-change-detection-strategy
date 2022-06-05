import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ToDo} from "./example.component";

@Component({
	selector: 'example-root-v2',
	template: `
		<h2>It's example root V2 componnet</h2>
		<button (click)="add()">Add</button>
		<example-todos-v2 [todos]="todos"></example-todos-v2>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleOuterV2Component {
	public todos: ToDo[] = [{ title: 'One' }, { title: 'Two' }];
	public add(): void {
		this.todos = [...this.todos, { title: Math.random().toString() }];
	}
}
