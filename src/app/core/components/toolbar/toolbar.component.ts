import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  counter: number = 0;
  sub: Subscription;
  count$: BehaviorSubject<number> = new BehaviorSubject<number>(this.counter);

  constructor(public authService: AuthService) {
    this.sub = this.count$.subscribe();
  }

  increase() {
    this.counter++;
    this.count$.next(this.counter);
  }

  decrease() {
    this.counter--;
    this.count$.next(this.counter);
  }
}
