import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ToDo} from "./example.component";

@Component({
	selector: 'example-root',
	template: `
		<h2>It's example root componnet</h2>
		<button (click)="add()">Add</button>
		<example-todos [todos]="todos"></example-todos>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleOuterComponent {
	public todos: ToDo[] = [{ title: 'One' }, { title: 'Two' }];
	public add(): void {
		this.todos = [...this.todos, { title: Math.random().toString() }];
	}
}
