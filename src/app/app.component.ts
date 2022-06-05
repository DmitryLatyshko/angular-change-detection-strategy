import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public get isShowHiddenOnPushRoutes(): boolean {
		return this.router.url.startsWith('/onpush');
	}

	public get isShowHiddenOnPushRoutes2(): boolean {
		return this.router.url.startsWith('/2-onpush');
	}

	constructor(protected readonly router: Router) {
	}
}
