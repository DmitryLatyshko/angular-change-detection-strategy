import {ChangeDetectionStrategy, Component} from "@angular/core";

export interface ToDo {
	title: string;
}

@Component({
	selector: 'example',
	styleUrls: ['./onpush_2.scss'],
	templateUrl: './example.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {
	public dlBlockOuter = `@Component({
	selector: 'example-root',
	template: \`
		<h2>It's example root componnet</h2>
			<button (click)="add()">Add</button>
		<example-todos [todos]="todos"></example-todos>
	\`,
})
export class ExampleOuterComponent {
	public todos: ToDo[] = [{ title: 'One' }, { title: 'Two' }];
	public add(): void {
		this.todos = [...this.todos, { title: Math.random().toString() }];
	}
}`;

	public dlBlockInner = `@Component({
	selector: 'example-todos',
	template: \`
		<h2>It's example todos componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<p *ngFor="let item of todos">{{item.title}} - {{runChangeDetection}}</p>
		</div>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInnerComponent {
	@Input()
	public todos: ToDo[];
	public get runChangeDetection(): boolean {
		console.log('example-todos - checking the view.');
		return true;
	}
}`;

	public dlBlockOuterV2 = `@Component({
	selector: 'example-root-v2',
	template: \`
		<h2>It's example root V2 componnet</h2>
		<button (click)="add()">Add</button>
		<example-todos-v2 [todos]="todos"></example-todos-v2>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleOuterV2Component {
	public todos: ToDo[] = [{ title: 'One' }, { title: 'Two' }];
	public add(): void {
		this.todos = [...this.todos, { title: Math.random().toString() }];
	}
}`;

	public dlBlockInnerV2 = `@Component({
	selector: 'example-todos-v2',
	template: \`
		<h2>It's example todos V2 componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<example-todo [todo]="item" *ngFor="let item of todos"></example-todo>
		</div>
		\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInnerV2Component {
	@Input()
	public todos: ToDo[];
}`;

	public dlBlockInnerV2Inner = `@Component({
	selector: 'example-todo',
	template: \`<p>{{todo.title}} - {{runChangeDetection}}</p>\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInnerV2InnerComponent {
	@Input()
	public todo: ToDo;
	public get runChangeDetection(): boolean {
		console.log('example-todos-v2 - checking the view.');
		return true;
	}
}`;
}
