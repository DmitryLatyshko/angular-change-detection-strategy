import {AfterContentInit, Component, ContentChild} from "@angular/core";
import {TemplateVariablesInnerV2Component} from "./template-variables-inner-v2.component";

@Component({
	selector: 'template-variables-outer-v2',
	template: `
		<h2>It's template variables outer V2 componnet</h2>
		<ng-content></ng-content>
	`,
})
export class TemplateVariablesOuterV2Component implements AfterContentInit {
	@ContentChild(TemplateVariablesInnerV2Component)
	public inner: TemplateVariablesInnerV2Component;
	public ngAfterContentInit() {
		setTimeout(() => {
			this.inner.content = 'Content';
		}, 3000)
	}
}
