import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {Observable} from "rxjs";
import {Item} from "./async-pipe.component";

@Component({
	selector: 'async-pipe-inner-v2',
	template: `
		<h2>It's async pipe inner V2 componnet</h2>
		<div style="min-height: 20px; width: 100%; border: 1px solid red;">
			<p *ngFor="let item of items | async">{{item.title}}</p>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeInnerV2Component {
	@Input()
	public items: Observable<Item[]>;
}
