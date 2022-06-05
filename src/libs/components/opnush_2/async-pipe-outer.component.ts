import {Component} from "@angular/core";
import {Item} from "./async-pipe.component";
import {BehaviorSubject} from "rxjs";

@Component({
	selector: 'async-pipe-outer',
	template: `
		<h2>It's async pipe outer componnet</h2>
		<button (click)="add()">Add</button>
		<async-pipe-inner [items]="items$"></async-pipe-inner>
	`,
})
export class AsyncPipeOuterComponent {
	public items: Item[] = [];
	public items$ = new BehaviorSubject(this.items);
	public add(): void {
		this.items.push({ title: Math.random() });
		this.items$.next(this.items);
	}
}
