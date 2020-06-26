import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,

    GridModule,
    FormsModule,
    ReactiveFormsModule,

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
    GridModule,
    FormsModule,
    ReactiveFormsModule,
  ]



})
export class SharedModule { }
