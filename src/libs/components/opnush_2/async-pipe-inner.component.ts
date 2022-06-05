import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Item} from "./async-pipe.component";

@Component({
	selector: 'async-pipe-inner',
	template: `
		<h2>It's async pipe inner componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<p *ngFor="let item of _items">{{item.title}}</p>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeInnerComponent implements OnInit{
	public _items: Item[];
	@Input()
	public items: Observable<Item[]>;
	public ngOnInit() {
		this.items.subscribe(items => this._items = items);
	}
}
