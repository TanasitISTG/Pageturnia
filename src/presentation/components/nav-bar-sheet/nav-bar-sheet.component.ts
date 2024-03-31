import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { lucideMenu, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import { HlmSheetImports } from '@spartan-ng/ui-sheet-helm';

@Component({
  selector: 'app-nav-bar-sheet',
  standalone: true,
  imports: [
		BrnSheetTriggerDirective,
		BrnSheetContentDirective,
		HlmSheetImports,

		HlmButtonDirective,
		HlmIconComponent,
		HlmScrollAreaComponent,
		RouterLink,
	],
	providers: [provideIcons({ lucideMenu, lucideX })],  templateUrl: './nav-bar-sheet.component.html',
  styleUrl: './nav-bar-sheet.component.scss'
})
export class NavBarSheetComponent {
  
}
