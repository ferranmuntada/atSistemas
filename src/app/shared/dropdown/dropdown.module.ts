import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../utils/create-translate-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    })
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }
