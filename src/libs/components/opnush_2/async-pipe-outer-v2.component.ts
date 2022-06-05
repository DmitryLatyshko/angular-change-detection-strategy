import {Component} from "@angular/core";
import {Item} from "./async-pipe.component";
import {BehaviorSubject} from "rxjs";

@Component({
	selector: 'async-pipe-outer-v2',
	template: `
		<h2>It's async pipe outer V2 componnet</h2>
		<button (click)="add()">Add</button>
		<async-pipe-inner-v2 [items]="items$"></async-pipe-inner-v2>
	`,
})
export class AsyncPipeOuterV2Component {
	public items: Item[] = [];
	public items$ = new BehaviorSubject(this.items);
	public add(): void {
		this.items.push({ title: Math.random() });
		this.items$.next(this.items);
	}
}
