import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public text: string = '';
  public color: string = '#ccc';

  changeBorderColor($event: string) {
    this.color = $event;
  }
}
