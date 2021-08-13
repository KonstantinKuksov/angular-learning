import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    AuthModule,
  ],
  exports: [CommonModule, ToolbarComponent],
})
export class CoreModule {}
