import { Component, input } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/ui-dialog-brain';
import { HlmDialogComponent, HlmDialogContentComponent, HlmDialogDescriptionDirective, HlmDialogFooterComponent, HlmDialogHeaderComponent, HlmDialogTitleDirective } from '@spartan-ng/ui-dialog-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { DeviceDetectorService } from 'ngx-device-detector';
import { lucideLogIn } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { AuthRepository } from '../../../domain/repositories/auth.repository';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmIconComponent,

    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
  viewProviders: [
    provideIcons({
      lucideLogIn,
    }),
  ],
})
export class LoginDialogComponent {
  isMobile = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private deviceService: DeviceDetectorService, private authRepository: AuthRepository) {
    this.isMobile = this.deviceService.isMobile();
  }

  onSubmit() {
    // this.authRepository.login();
    console.log('onSubmit')
    console.log(this.loginForm.value)
    this.authRepository.login(this.loginForm.value.email ?? '', this.loginForm.value.password ?? '').subscribe((response) => {
      console.log(response)
    })
  }
}
