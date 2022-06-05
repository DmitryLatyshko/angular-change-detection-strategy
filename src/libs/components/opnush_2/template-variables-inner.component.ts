import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
	selector: 'template-variables-inner',
	template: `
		<h2>It's template variables inner componnet</h2>
		<p>{{content}}</p>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateVariablesInnerComponent {
	@Input()
	public content: string;
}
