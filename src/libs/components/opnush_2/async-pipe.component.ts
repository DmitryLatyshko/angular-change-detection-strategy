import {ChangeDetectionStrategy, Component} from "@angular/core";

export interface Item {
	title: number;
}

@Component({
	selector: 'async-pipe',
	styleUrls: ['./onpush_2.scss'],
	templateUrl: './async-pipe.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeComponent {
	public dlBlockOuter = `@Component({
	selector: 'async-pipe-outer',
	template: \`
		<h2>It's async pipe outer componnet</h2>
		<button (click)="add()">Add</button>
		<async-pipe-inner [items]="items$"></async-pipe-inner>
	\`,
})
export class AsyncPipeOuterComponent {
	public items: Item[] = [];
	public items$ = new BehaviorSubject(this.items);
	public add(): void {
		this.items.push({ title: Math.random() });
		this.items$.next(this.items);
	}
}`;

	public dlBlockInner = `@Component({
	selector: 'async-pipe-inner',
	template: \`
		<h2>It's async pipe inner componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<p *ngFor="let item of _items">{{item.title}}</p>
		</div>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeInnerComponent implements OnInit{
	public _items: Item[];
	@Input()
	public items: Observable<Item[]>;
	public ngOnInit() {
		this.items.subscribe(items => this._items = items);
	}
}`;

	public dlBlockOuterV2 = `@Component({
	selector: 'async-pipe-outer-v2',
	template: \`
		<h2>It's async pipe outer V2 componnet</h2>
		<button (click)="add()">Add</button>
		<async-pipe-inner-v2 [items]="items$"></async-pipe-inner-v2>
	\`,
})
export class AsyncPipeOuterV2Component {
	public items: Item[] = [];
	public items$ = new BehaviorSubject(this.items);
	public add(): void {
		this.items.push({ title: Math.random() });
		this.items$.next(this.items);
	}
}`;

	public dlBlockInnerV2 = `@Component({
	selector: 'async-pipe-inner-v2',
	template: \`
		<h2>It's async pipe inner V2 componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<p *ngFor="let item of items | async">{{item.title}}</p>
		</div>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeInnerV2Component {
	@Input()
	public items: Observable<Item[]>;
}`;

	public dlBlockV2Code = `private _updateLatestValue(async: any, value: Object): void {
	if (async === this._obj) {
		this._latestValue = value;
		this._ref.markForCheck();
	}
}`;
}
