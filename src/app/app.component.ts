import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { Subscription } from 'rxjs';
import { BackofficeManagerService } from './services/backoffice-manager.service';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'W2M-Super-Heroes';
  loading = false;
  transparentLoading = false;
  subscriptions = new Subscription();

  constructor(
    private _backofficeManagerService: BackofficeManagerService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this._backofficeManagerService.loadingSubject$.subscribe((status) => {
        this.loading = status;
        this._cdr.detectChanges();
      })
    );

    this.subscriptions.add(
      this._backofficeManagerService.transparentLoadingSubject$.subscribe(
        (status) => {
          this.transparentLoading = status;
          this._cdr.detectChanges();
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
