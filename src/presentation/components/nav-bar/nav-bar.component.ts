import { Component, inject } from '@angular/core';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { CommonModule } from '@angular/common';
import { DarkMode, ThemeService } from '../../../domain/services/theme.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideHome,
  lucideBook,
  lucideSearch,
  lucideMoon,
  lucideSunDim,
  lucidePalette,
} from '@ng-icons/lucide';
import { HlmMenuComponent, HlmMenuImports } from '@spartan-ng/ui-menu-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RouterLink } from '@angular/router';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { NavBarSheetComponent } from '../nav-bar-sheet/nav-bar-sheet.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    HlmMenuImports,

    BrnMenuTriggerDirective,

    HlmMenuComponent,
    HlmIconComponent,
    NgIconComponent,
    LoginDialogComponent,
    NavBarSheetComponent,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmSeparatorDirective,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  viewProviders: [
    provideIcons({
      lucideHome,
      lucideBook,
      lucideSearch,
      lucideMoon,
      lucideSunDim,
      lucidePalette,
    }),
  ],
})
export class NavBarComponent {
  private _themeService = inject(ThemeService);
  theme$ = this._themeService.darkMode$;
  public setDarkMode(theme: DarkMode) {
    this._themeService.setDarkMode(theme);
  }
}
