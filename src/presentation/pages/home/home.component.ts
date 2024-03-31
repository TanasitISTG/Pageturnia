import { Component } from '@angular/core';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import { NovelRepository } from '../../../domain/repositories/novel.repository';
import { Novel } from '../../../domain/models/novel.model';
import { take } from 'rxjs';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HlmSeparatorDirective, HlmSkeletonComponent, HlmBadgeDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLoading = true;
  skeleton = Array.from({ length: 8 });
  novels: Novel[] = [];

  constructor(private novelRepository: NovelRepository) {
    this.novelRepository.getNovels().pipe(take(1)).subscribe((novels) => {
      this.novels = novels;
      this.isLoading = false;
    })
  }
}
