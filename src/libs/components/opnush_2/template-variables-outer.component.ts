import {AfterContentInit, Component, ContentChild} from "@angular/core";
import {TemplateVariablesInnerComponent} from "./template-variables-inner.component";

@Component({
	selector: 'template-variables-outer',
	template: `
		<h2>It's template variables outer componnet</h2>
		<ng-content></ng-content>
	`,
})
export class TemplateVariablesOuterComponent implements AfterContentInit {
	@ContentChild(TemplateVariablesInnerComponent)
	public inner: TemplateVariablesInnerComponent;
	public ngAfterContentInit() {
		setTimeout(() => {
			this.inner.content = 'Content';
		}, 3000)
	}
}
