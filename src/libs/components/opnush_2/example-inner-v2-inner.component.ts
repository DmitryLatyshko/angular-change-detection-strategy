import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {ToDo} from "./example.component";

@Component({
	selector: 'example-todo',
	template: `<p>{{todo.title}} - {{runChangeDetection}}</p>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInnerV2InnerComponent {
	@Input()
	public todo: ToDo;
	public get runChangeDetection(): boolean {
		console.log('example-todos-v2 - checking the view.');
		return true;
	}
}
