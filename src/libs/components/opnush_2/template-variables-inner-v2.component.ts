import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from "@angular/core";

@Component({
	selector: 'template-variables-inner-v2',
	template: `
		<h2>It's template variables inner V2 componnet</h2>
		<p>{{_content}}</p>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateVariablesInnerV2Component {
	public _content: string;
	@Input()
	public set content(value: string) {
		this._content = value;
		this._changeDetector.markForCheck();
	}
	constructor(private _changeDetector: ChangeDetectorRef) {
	}
}
