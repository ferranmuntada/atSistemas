import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsModule } from './dogs/dogs.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ErrorHandlerInterceptor } from './shared/error-handler/error-handler.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createTranslateLoader } from './shared/utils/create-translate-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DogsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
