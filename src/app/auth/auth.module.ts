import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { isNotAuthenticated } from './guards/isNotAuthenticated.guard';
import { isAuthenticated } from './guards/isAuthenticated.guard';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, isNotAuthenticated, isAuthenticated]
})

export class AuthModule { }
