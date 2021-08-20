import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard-page/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardArticleComponent } from './components/dashboard-article/dashboard-article.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent, DashboardArticleComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
})
export class DashboardModule {}
