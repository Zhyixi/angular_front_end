import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MyTutorialComponent } from './my-tutorial/my-tutorial.component';


@NgModule({
  declarations: [
    AppComponent, // 声明根组件，这是应用程序的主要组件
    AuthComponent, MyTutorialComponent  
  ],
  imports: [
    BrowserModule,  // 提供在浏览器中运行 Angular 应用程序所需的基本功能
    AppRoutingModule,  // 导入应用程序的路由配置模块
  ],
  providers: [
    provideClientHydration()  // 提供一个可能是客户端 hydration 服务的提供者
  ],
  bootstrap: [AppComponent],  // 指定应用程序启动时的根组件
})
export class AppModule { }