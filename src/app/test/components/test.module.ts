import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StateManagementModule } from 'src/app/state/state.module';

@NgModule({
  imports: [
    StateManagementModule.forRoot(),
    RouterTestingModule,
    HttpClientTestingModule,
    ReactiveFormsModule,
  ],
})
export class TestModule {}
