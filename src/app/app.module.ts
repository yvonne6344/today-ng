import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
// Module
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule } from './pages/main/main-routing.module';
// Service
import { LocalStorageService } from './services/local-storage.service';
// Component
import { AppComponent } from './app.component';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    MainModule,
    MainRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
