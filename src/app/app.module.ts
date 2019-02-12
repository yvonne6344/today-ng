import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from './services/local-storage.service';
import zh from '@angular/common/locales/zh';
import { SetupModule } from './pages/setup/setup.module';

import { registerLocaleData } from '@angular/common';
import { MainModule } from './pages/main/main.module';
import { MainRoutingModule } from './pages/main/main-routing.module';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    MainModule,
    MainRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
