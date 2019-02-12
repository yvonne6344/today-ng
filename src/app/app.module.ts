import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
// Module
import { AppRoutingModule } from './app-routing.module';
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
import { MainRoutingModule } from './pages/main/main-routing.module';
// Component
import { AppComponent } from './app.component';
// Service
import { LocalStorageService } from './services/local-storage.service';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    SetupModule,
    MainModule,
    MainRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
