import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector: 'template-variables',
	styleUrls: ['./onpush_2.scss'],
	templateUrl: './template-variables.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateVariablesComponent {
	public dlBlockAll = `<template-variables-outer>
	<template-variables-inner></template-variables-inner>
</template-variables-outer>`;

	public dlBlockOuter = `@Component({
	selector: 'template-variables-outer',
	template: \`
		<h2>It's template variables outer componnet</h2>
		<ng-content></ng-content>
	\`,
})
export class TemplateVariablesOuterComponent implements AfterContentInit {
	@ContentChild(TemplateVariablesInnerComponent)
	public inner: TemplateVariablesInnerComponent;
	public ngAfterContentInit() {
		setTimeout(() => {
			this.inner.content = 'Content';
		}, 3000)
	}
}`;

	public dlBlockInner = `@Component({
	selector: 'template-variables-inner',
	template: \`
		<h2>It's template variables inner componnet</h2>
		<p>{{content}}</p>
	\`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateVariablesInnerComponent {
	@Input()
	public content: string;
}`;

	public dlBlockOuterV2 = `@Component({
	selector: 'template-variables-outer-v2',
	template: \`
		<h2>It's template variables outer V2 componnet</h2>
		<ng-content></ng-content>
	\`,
})
export class TemplateVariablesOuterV2Component implements AfterContentInit {
	@ContentChild(TemplateVariablesInnerV2Component)
	public inner: TemplateVariablesInnerV2Component;
	public ngAfterContentInit() {
		setTimeout(() => {
			this.inner.content = 'Content';
		}, 3000)
	}
}`;

	public dlBlockInnerV2 = `@Component({
	selector: 'template-variables-inner-v2',
	template: \`
		<h2>It's template variables inner V2 componnet</h2>
		<p>{{_content}}</p>
	\`,
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
}`;

	public dlBlockCode = `<template-variables-outer>
  <template-variables-inner [content]="content"></template-variables-inner>
</template-variables-outer>`;
}
