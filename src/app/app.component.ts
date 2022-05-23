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
		if (this.router.url.startsWith('/onpush')) {
			return true;
		}
		return false;
	}

	constructor(protected readonly router: Router) {
	}
}
