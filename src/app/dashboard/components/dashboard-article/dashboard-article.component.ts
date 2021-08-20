import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard-article',
  templateUrl: './dashboard-article.component.html',
  styleUrls: ['./dashboard-article.component.scss']
})
export class DashboardArticleComponent {
  @Input() text!: string;

  @Output() inputBorderColorEvent = new EventEmitter<string>();

  changeInputBorderColor() {
    const color = '#' + (Math.random().toString(16) + '000000').substring(2,8);
    this.inputBorderColorEvent.emit(color);
  }
}
