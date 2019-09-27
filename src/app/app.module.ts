import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AgentTokenInterceptorService } from '../app/home/agent-token-interceptor.service'
import {HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { DataService } from './home/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AgentTokenInterceptorService,
      multi: true,
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
