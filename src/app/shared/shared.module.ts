import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,

    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-full-width',
      closeButton: true,
      enableHtml: true
  })

  ],

  exports: [
    MatCardModule,
    MatButtonModule,
  ]



})
export class SharedModule { }
